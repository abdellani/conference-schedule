class Review < ApplicationRecord
  validates :note, presence: true, length: { minimum: 3, maximum: 300 }

  belongs_to :speaker
  belongs_to :participant
  belongs_to :talk
end
