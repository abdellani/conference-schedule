class Company < ApplicationRecord
  has_many :participations
  has_many :sponsored_conferences,->{Participation.as_sponsor}, through: :participations, source: :conference
  has_many :participations_as_exhibitors,->{Participation.as_exhibitor}, through: :participations, source: :conference
end
