class User < ApplicationRecord
  validates :name, presence:true
  validates :company, presence:true
  validates :role, presence:true
  validates :email, presence:true
  validates :mobile, presence:true
  has_secure_password
  validates :bio, presence:true
  has_many :attendances
  has_many :questions
  has_many :notifications

end
