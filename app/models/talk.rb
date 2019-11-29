class Talk < ApplicationRecord
  has_many :attendances
  belongs_to :conference
end
