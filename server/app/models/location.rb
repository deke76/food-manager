class Location < ApplicationRecord
  belongs_to :user, :dependent => :destroy
  has_many :foods
end
