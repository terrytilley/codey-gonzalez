class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.integer :accuracy
      t.integer :duration
      t.integer :wpm
      t.integer :score
      t.integer :code

      t.timestamps
    end
  end
end
