# frozen_string_literal: true

class Company < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze

  validates :name, presence: true, length: { minimum: 3, maximum: 100 }
  validates :address, presence: true, length: { minimum: 3, maximum: 250 }
  validates :pobox, presence: true, length: { minimum: 3, maximum: 100 }
  validates :email, presence: true, uniqueness: true, length: { minimum: 3, maximum: 100 },
                    format: { with: VALID_EMAIL_REGEX }
  validates :description, presence: true, length: { minimum: 3, maximum: 500 }
  validates :website, presence: true, length: { minimum: 3, maximum: 150 }

  has_many :participations
  has_many :sponsored_conferences, -> { Participation.as_sponsor }, through: :participations, source: :conference
  has_many :participations_as_exhibitors, -> { Participation.as_exhibitor }, through: :participations,
                                                                             source: :conference
end
