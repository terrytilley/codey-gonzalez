require 'rails_helper'

feature "a game can be played" do

  context "on page load code should be displayed" do

    it "should display an exemplar code to copy" do
      visit('/')
      save_and_open_page
      within("#prompt-container") do
        wait(3.seconds).for { page }.to have_selector('initial')
      end
    end

  # context '' do
  #   let(:codeText){ "function" }
  #   it 'should'
  #
  #   end
  # end
  # context 'the last keystroke ends the game' do
  #   it 'should call endGame() once the last character is matched' do
  #
  #   end
  end
end
