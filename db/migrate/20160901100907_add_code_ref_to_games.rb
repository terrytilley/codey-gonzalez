class AddCodeRefToGames < ActiveRecord::Migration[5.0]
  def change
    add_reference :games, :code, foreign_key: true
  end
end
