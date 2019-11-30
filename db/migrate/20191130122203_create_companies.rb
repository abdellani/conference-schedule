class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :description
      t.string :website
      t.string :email
      t.string :address
      t.string :pobox

      t.timestamps
    end
  end
end
