class LocationsController < ApplicationController
  def index
    @locations = Location.where(user_id: params[:user_id])
    render json: @locations
  end
end
