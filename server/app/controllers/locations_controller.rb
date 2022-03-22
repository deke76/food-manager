class LocationsController < ApplicationController
  def index
    @locations = Location.where(user_id: params[:id])
    render json: params
  end
end
