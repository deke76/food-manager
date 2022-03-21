class User < ApplicationRecord
  has_many :locations
  has_many :food_items
end
