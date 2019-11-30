class User < ApplicationRecord
  has_secure_password
  has_many :attendances
  has_many :questions
end
