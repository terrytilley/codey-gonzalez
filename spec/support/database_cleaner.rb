RSpec.configure do |config|

 config.before(:suite) do
   DatabaseCleaner.clean_with(:truncation)
 end


 config.after(:each) do
   DatabaseCleaner.clean
 end

end
