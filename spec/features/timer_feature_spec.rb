require 'rails_helper'

feature 'a timed game can be played' do

  context 'a timer is run' do
    it "starts when the first key is pressed", js: true do
      visit('/')
      find("body").native.send_key("h")
      expect(page).to have_css('div.timerStarted')
    end
  end
end
