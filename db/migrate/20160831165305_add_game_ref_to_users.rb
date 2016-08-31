class AddGameRefToUsers < ActiveRecord::Migration[5.0]
  def change
    add_reference :users, :game, foreign_key: true
  end
end
