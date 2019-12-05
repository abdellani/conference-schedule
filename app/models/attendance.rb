class Attendance < ApplicationRecord
  belongs_to :talk
  belongs_to :user
  scope :as_speaker, ->{ where(role: "speaker") }
  scope :as_moderator, ->{ where(role: "moderator") }
  scope :as_participant, ->{ where(role: "participant") }
  validates_uniqueness_of :role, scope: [:talk_id,:user_id]
end
