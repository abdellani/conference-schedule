class Conference < ApplicationRecord
  has_many :talks
  has_many :attendees,->{distinct}, through: :talks
  has_many :speakers,->{distinct}, through: :talks
  has_many :moderators,->{distinct}, through: :talks
  has_many :participants,->{distinct}, through: :talks
  has_many :participations
  has_many :exhibitors,->{Participation.as_exhibitor}, through: :participations, source: :company
  has_many :sponsors,->{Participation.as_sponsor}, through: :participations, source: :company

end
