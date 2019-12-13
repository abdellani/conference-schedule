class AddRefToTalks < ActiveRecord::Migration[5.1]
  def change
    add_reference :talks, :conference, foreign_key: true
  end
end
