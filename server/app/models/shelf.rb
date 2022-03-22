class Shelf < ApplicationRecord
  belongs_to :location
  has_many :foods
end
