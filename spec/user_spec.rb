require 'rails_helper'

describe User do

  context 'user results' do

    user = User.create(email: 'testss@testys.com')
    user.save(validate: false)
    user.games.create_with_user({accuracy: 100, wpm: 40, score: 500, duration: 40}, user).save(validate: false)
    user.games.create_with_user({accuracy: 50, wpm: 20, score: 1000, duration: 20}, user).save(validate: false)

    it "returns the average accuracy of the users games" do
      expect(subject.average_accuracy(user)).to eq 75
    end

    it "returns the average words per minute of the users games" do
      expect(subject.average_wpm(user)).to eq 30
    end

    it "returns the average time of the users games" do
      expect(subject.average_time(user)).to eq 30
    end

    it "returns the average score of the users games" do
      expect(subject.average_score(user)).to eq 750
    end

    it "returns a users highest score" do
      expect(subject.highest_score(user)).to eq 1000
    end

  end

end
