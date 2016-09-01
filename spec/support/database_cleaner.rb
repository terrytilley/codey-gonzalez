RSpec.configure do |config|

 config.after(:each) do
   DatabaseCleaner.clean
 end

end
