def sign_up
  visit('/')
  click_link('Sign Up')
  fill_in('Email', with: 'test@example.com')
  fill_in('Password', with: 'qwerty')
  fill_in('Password confirmation', with: 'qwerty')
  click_button('Sign Up')
end

def build_with_user(attributes = {}, user)
  attributes[:user] ||= user
  build(attributes)
end
