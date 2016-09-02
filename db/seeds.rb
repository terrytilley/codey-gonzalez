Code.destroy_all
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Code.create(language: 'javascript',
            content: "globalTimer = setInterval(function() {\n  seconds = ((new Date() - start) / parseFloat(1000)).toFixed(2);\n  $('#timer').text(seconds);\n}, 10);",
            level: 5)

Code.create(language: 'javascript',
            content: "class Song extends Media {\n  constructor(title, artist, duration, isPlaying = false) {\n    super(title, duration, isPlaying);\n  this.artist = artist;\n  }\n}",
            level: 3)

Code.create(content: "class AddOmniauthToUsers\n  def change\n    add_column :users, :provider, :string\n    add_column :users, :uid, :string\n  end\nend", language: 'ruby', level: 2)

Code.create(content: "(function typing() {\n  $(document).on('keypress', function(event) {\n    compare(pressedKey(event.keyCode), codeText);\n  });\n})();", level: 3, language: 'javascript')

Code.create(content:"function concatenate(first, last) {\n  var full;\n  full = first + last;\n  return full;\n}", language: 'javascript', level: 1)

Code.create(content: "context 'on page load code should be displayed' do\n  it 'should display this exact test to copy' do\n    visit('/')\n    page.find('#code')\n    expect(page).to have_selector('pre')\n  end\nend", language: 'ruby', level: 2)
