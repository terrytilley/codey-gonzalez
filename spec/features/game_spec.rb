require 'rails_helper'

feature "a game can be played" do

  context "on page load code should be displayed" do
    it "should display a JS function to copy" do
      visit('/')
      page.find("#code")
      expect(page).to have_selector("pre")
    end

  # context 'the last keystroke ends the game' do
  #   it 'should call endGame() once the last character is matched' do
  #
  #   end
  end
end
