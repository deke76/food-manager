class Food < ApplicationRecord
  belongs_to :location, :dependent => :destroy
end
