class Conference < ApplicationRecord
  has_many :talks
  has_many :speakers,->{distinct}, through: :talks
  has_many :moderators,->{distinct}, through: :talks
  has_many :participants,->{distinct}, through: :talks
  has_many :company_participations, class_name: :Participation
  has_many :exhibitors,->{Participation.as_exhibitor}, through: :company_participations, source: :company
  has_many :sponsors,->{Participation.as_sponsor}, through: :company_participations, source: :company

end
