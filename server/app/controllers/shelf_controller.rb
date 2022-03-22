class ShelfController < ApplicationController
  def index
    @shelves = Shelf.where(location_id: params['location_id'])
    render json: @shelves
  end
end
