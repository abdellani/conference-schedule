class Talk < ApplicationRecord
  validates :title, presence: true, length: { minimum: 3, maximum: 100 }
  validates :location, presence: true, length: { minimum: 3, maximum: 100 }
  validates :description, presence: true, length: { minimum: 3, maximum: 500 }
  
  has_many :attendances
  has_many :questions
  belongs_to :conference
  has_many :attendees, through: :attendances,source: :user
  has_many :speakers,-> {Attendance.as_speaker} , through: :attendances, source: :user
  has_many :moderators,-> {Attendance.as_moderator} , through: :attendances, source: :user
  has_many :participants,-> {Attendance.as_participant} , through: :attendances, source: :user

end
