class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :company
      t.string :role
      t.string :email
      t.string :mobile
      t.string :password_digest
      t.string :bio

      t.timestamps
    end
  end
end
