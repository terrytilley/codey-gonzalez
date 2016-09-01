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
            level: 3)

Code.create(language: 'javascript',
            content: "class Song extends Media {\n  constructor(title, artist, duration, isPlaying = false) {\n    super(title, duration, isPlaying);\n  this.artist = artist;\n  }",
            level: 2)

Code.create(language: 'ruby',
            content: "def preview\n  @post = Post.find(params[:post_id])\n  @comment =  @post.comments.build(params[:comment])\n\n  respond_to do |format|\n    format.html { post_url(@post) }\n    format.js\n  end\nend",
            level: 2)

Code.create(language: 'ruby',
            content: "def first_n_primes(n)\n\n  unless n.is_a? Integer\n    return 'n must be an integer.'\n  end\n\n  if n == 0\n    return 'n must be greater than 0.'\nend",
            level: 1)


Code.create(content: "class AddOmniauthToUsers\n  def change\n    add_column :users, :provider, :string\n    add_column :users, :uid, :string\n  end\nend", language: 'ruby', level: 2)
