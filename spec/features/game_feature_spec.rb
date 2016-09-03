require 'rails_helper'

feature "a game can be played" do

  context "on page load code should be displayed" do

    it "should display an exemplar code to copy", js: true do
      visit('/')
      within("#prompt-container") do
        expect(page).to have_selector('span')
      end
    end

    it 'should highlight a letter when a game starts', js: true do
      visit('/')
      find("body").native.send_key("h")
      expect(page).to satisfy {|page| page.has_css?('.correct') or page.has_css?('.incorrect')}
    end

  end
end
