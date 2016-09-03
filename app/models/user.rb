class User < ApplicationRecord
  has_many :games,
  -> { extending WithUserAssociationExtension },
  dependent: :destroy

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
    end
  end

  def highest_score(user)
    scores = []
    user.games.each do |game|
      scores << game.score
    end
    return scores.sort.reverse[0]
  end

  def average_results(user)
    { accuracy: user.average(:accuracy).to_i,
      wpm: user.average(:wpm).to_i,
      time: user.average(:duration).to_i,
      score: user.average(:score).to_i,
    }
  end

end
