class Attendance < ApplicationRecord
  belongs_to :talk
  belongs_to :user
end
