class Participation < ApplicationRecord
  ROLES = ['exhibitor', 'sponsor']
  validates :role,inclusion: {in: ROLES}
  validates_uniqueness_of :role, scope: [:company_id,:conference_id]

  belongs_to :company
  belongs_to :conference

  scope :as_sponsor,->{where(role:"sponsor")}
  scope :as_exhibitor,->{where(role:"exhibitor")}
end
