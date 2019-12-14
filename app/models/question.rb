# frozen_string_literal: true

class Question < ApplicationRecord
  belongs_to :user
  belongs_to :talk
  validates :content, presence: true, length: { minimum: 1, maximum: 500 }
end
