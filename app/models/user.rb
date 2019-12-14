# frozen_string_literal: true

class User < ApplicationRecord
  validates :name, presence: true, length: { minimum: 3, maximum: 100 }
  validates :company, presence: true, length: { minimum: 3, maximum: 100 }
  validates :role, presence: true, length: { minimum: 3, maximum: 100 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze
  validates :email, presence: true, uniqueness: true, length: { minimum: 3, maximum: 100 },
                    format: { with: VALID_EMAIL_REGEX }
  validates :mobile, presence: true, length: { minimum: 8, maximum: 60 }

  has_secure_password
  validates :bio, presence: true, length: { minimum: 3, maximum: 500 }
  has_many :attendances
  has_many :questions
  has_many :notifications
end
