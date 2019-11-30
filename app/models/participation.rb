class Participation < ApplicationRecord
  belongs_to :company
  belongs_to :conference
end
