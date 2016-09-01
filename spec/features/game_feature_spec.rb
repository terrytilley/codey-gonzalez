require 'rails_helper'

feature "a game can be played" do

  context "on page load code should be displayed" do

    it "should display an exemplar code to copy", js: true do
      visit('/')
      within("#prompt-container") do
        expect(page).to have_selector('span')
      end
    end

  end
end
