class CreateConferences < ActiveRecord::Migration[5.1]
  def change
    create_table :conferences do |t|
      t.date :date
      t.string :location

      t.timestamps
    end
  end
end
