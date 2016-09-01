class User < ApplicationRecord
  has_many :games,
  -> { extending WithUserAssociationExtension },
  dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
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

  def average_accuracy(user)
    total = 0
    count = 0
    user.games.each do |game|
        count += 1
        total += game.accuracy
    end
    return total/count
  end

  def average_wpm(user)
    total = 0
    count = 0
    user.games.each do |game|
        count += 1
        total += game.wpm
    end
    return total/count
  end

  def average_time(user)
    total = 0
    count = 0
    user.games.each do |game|
        count += 1
        total += game.duration
    end
    return total/count
  end

  def average_score(user)
    total = 0
    count = 0
    user.games.each do |game|
        count += 1
        total += game.score
    end
    return total/count
  end

end
