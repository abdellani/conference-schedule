class AddSubjectDescriptionToConference < ActiveRecord::Migration[5.1]
  def change
    add_column :conferences, :subject, :string
    add_column :conferences, :description, :string
  end
end
