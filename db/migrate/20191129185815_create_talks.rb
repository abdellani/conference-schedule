class CreateTalks < ActiveRecord::Migration[5.1]
  def change
    create_table :talks do |t|
      t.integer :day
      t.time :start_time
      t.time :end_time
      t.string :location
      t.string :description

      t.timestamps
    end
  end
end
