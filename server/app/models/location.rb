class Location < ApplicationRecord
  belongs_to :user
  has_many :foods, :dependent => :destroy
end
