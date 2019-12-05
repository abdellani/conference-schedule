class Participation < ApplicationRecord
  ROLES = ['exhibitor', 'sponsor']
  validates :role,inclusion: {in: ROLES}

  belongs_to :company
  belongs_to :conference

  scope :as_sponsor,->{where(role:"sponsor")}
  scope :as_exhibitor,->{where(role:"exhibitor")}
end
