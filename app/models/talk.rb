class Talk < ApplicationRecord
  has_many :attendances
  belongs_to :conference
  has_many :attendees, through: :attendances,source: :user
  has_many :speakers,-> {Attendance.as_speaker} , through: :attendances, source: :user
  has_many :mentors,-> {Attendance.as_mentor} , through: :attendances, source: :user
  has_many :participants,-> {Attendance.as_participant} , through: :attendances, source: :user

end
