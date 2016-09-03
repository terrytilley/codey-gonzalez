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
      expect(page).to have_link('Sign Out')
    end

    it "should not see a 'Sign In' link and a 'Sign Up' link" do
      visit('/')
      expect(page).not_to have_link('Sign In')
      expect(page).not_to have_link('Sign Up')
    end
  end

  context 'a user is signed in' do
    before do
      sign_up
      id = User.first.id
      Game.create(accuracy: 98, wpm: 128, score: 90, duration: 30, user_id: id).save(:validate => false)
    end

    it 'should increase game count to 1' do
      count = Game.count
      expect(count).to eq(1)
    end

    it 'should be able to got to a user dashboard' do
      click_link "test@example.com"
      id = User.first.id
      expect(current_path).to eq "/users/#{id}"
    end

    it 'should show average user accuracy' do
      click_link "test@example.com"
      expect(page).to have_content(98)
    end


    it 'should show average user WPM' do
      click_link "test@example.com"
      expect(page).to have_content(128)
    end

    it 'should show user score' do
      click_link "test@example.com"
      expect(page).to have_content(90)
    end

  end

end
