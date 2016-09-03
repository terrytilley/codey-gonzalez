require 'rails_helper'

describe User do

  context 'user results' do

    User.create(id: 1, email: 'test@test.com').save(validate: false)
    user = User.find(1)
    user.games.create_with_user({accuracy: 100, wpm: 40, score: 500, duration: 40}, user).save(validate: false)
    user.games.create_with_user({accuracy: 50, wpm: 20, score: 1000, duration: 20}, user).save(validate: false)

    it "returns a users highest score" do
      expect(subject.highest_score(user)).to eq 1000
    end

  end

end
