class Administrator < ApplicationRecord
  validates :name, presence: true, length: { minimum: 3, maximum: 100 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: true, length: { minimum: 3, maximum: 100 },
                    format: { with: VALID_EMAIL_REGEX }
  has_secure_password
end
