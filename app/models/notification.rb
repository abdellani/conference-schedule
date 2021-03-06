# frozen_string_literal: true

class Notification < ApplicationRecord
  validates :content, presence: true, length: { minimum: 3, maximum: 100 }

  belongs_to :owner, class_name: :User, foreign_key: 'user_id'
end
