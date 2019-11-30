class Talk < ApplicationRecord
  has_many :attendances
  has_many :questions
  belongs_to :conference
  has_many :attendees, through: :attendances,source: :user
  has_many :speakers,-> {Attendance.as_speaker} , through: :attendances, source: :user
  has_many :moderators,-> {Attendance.as_moderator} , through: :attendances, source: :user
  has_many :participants,-> {Attendance.as_participant} , through: :attendances, source: :user

end
