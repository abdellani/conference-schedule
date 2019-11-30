class Conference < ApplicationRecord
  has_many :talks
  has_many :speakers,->{distinct}, through: :talks
  has_many :moderators,->{distinct}, through: :talks
  has_many :participants,->{distinct}, through: :talks
end
