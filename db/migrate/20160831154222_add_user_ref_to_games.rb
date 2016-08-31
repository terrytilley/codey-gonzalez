class AddUserRefToGames < ActiveRecord::Migration[5.0]
  def change
    add_reference :games, :user, foreign_key: true
  end
end
