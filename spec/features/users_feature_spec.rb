require 'rails_helper'

feature "User can 'Sign In' and 'Sign Out'" do

  context "user not signed in and on the homepage" do
    it "should see a 'Sign In' link and a 'Sign Up' link" do
      visit('/')
      expect(page).to have_link('Sign In')
      expect(page).to have_link('Sign Up')
    end

    it "should not see 'Sign Out' link" do
      visit('/')
      expect(page).not_to have_link('Sign Out')
    end
  end

  context "user signed in on the homepage" do
    before do
      sign_up
    end

    it "should see 'Sign Out' link" do
      visit('/')
      expect(page).to have_link('Sign Out')
    end

    it "should not see a 'Sign In' link and a 'Sign Up' link" do
      visit('/')
      expect(page).not_to have_link('Sign In')
      expect(page).not_to have_link('Sign Up')
    end
  end

end
