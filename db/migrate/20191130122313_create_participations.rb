class CreateParticipations < ActiveRecord::Migration[5.1]
  def change
    create_table :participations do |t|
      t.references :company, foreign_key: true
      t.references :conference, foreign_key: true
      t.string :role

      t.timestamps
    end
  end
end
