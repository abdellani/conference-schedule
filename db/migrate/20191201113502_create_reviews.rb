class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.references :speaker, foreign_key: { to_table: :users}
      t.references :participant, foreign_key: { to_table: :users}
      t.references :talk, foreign_key: true
      t.integer :evaluation
      t.string :note

      t.timestamps
    end
  end
end
