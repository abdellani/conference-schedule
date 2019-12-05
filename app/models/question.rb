class Question < ApplicationRecord
  belongs_to :user
  belongs_to :talk
  validates :content, presence: true,length: { minimum: 3,maximum: 10 }
end
