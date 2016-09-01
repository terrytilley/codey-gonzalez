class FixColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :codes, :context, :content
  end
end
