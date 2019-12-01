class Review < ApplicationRecord
  belongs_to :speaker
  belongs_to :participant
  belongs_to :talk
end
