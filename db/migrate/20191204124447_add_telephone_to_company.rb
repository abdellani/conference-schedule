class AddTelephoneToCompany < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :telephone, :string
  end
end
