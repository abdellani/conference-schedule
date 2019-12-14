# frozen_string_literal: true

class Participation < ApplicationRecord
  ROLES = %w[exhibitor sponsor].freeze
  validates :role, inclusion: { in: ROLES }
  validates_uniqueness_of :role, scope: %i[company_id conference_id]

  belongs_to :company
  belongs_to :conference

  scope :as_sponsor, -> { where(role: 'sponsor') }
  scope :as_exhibitor, -> { where(role: 'exhibitor') }
end
