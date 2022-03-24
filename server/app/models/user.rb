class User < ApplicationRecord
  has_many :locations, :foods
end
