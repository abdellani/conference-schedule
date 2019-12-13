class AddTitleToTalks < ActiveRecord::Migration[5.1]
  def change
    add_column :talks, :title, :string
  end
end
