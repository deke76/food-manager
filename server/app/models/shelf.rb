class Shelf < ApplicationRecord
  belongs_to :location
  belongs_to :user
  has_many :foods
end
