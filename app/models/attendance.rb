# frozen_string_literal: true

class Attendance < ApplicationRecord
  ROLES = %w[speaker moderator participant].freeze
  validates :role, inclusion: { in: ROLES }
  validates_uniqueness_of :role, scope: %i[talk_id user_id]

  belongs_to :talk
  belongs_to :user
  scope :as_speaker, -> { where(role: 'speaker') }
  scope :as_moderator, -> { where(role: 'moderator') }
  scope :as_participant, -> { where(role: 'participant') }
end
