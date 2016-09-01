require 'rails_helper'

describe Code do

  describe '.difficulty' do

    it "returns 'Easy' if code level is less than or equal to two" do
      expect(subject.difficulty(2)).to eq 'Easy'
    end

    it "returns 'Medium' if code level is less equal to 3" do
      expect(subject.difficulty(3)).to eq 'Medium'
    end

    it "returns 'Hard' if code level is greater than 3" do
      expect(subject.difficulty(5)).to eq 'Hard'
    end

  end

end
