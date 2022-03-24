class LocationsController < ApplicationController
  def all
    @locations = Location.all
    render json: @locations
  end
  
  def index
    @locations = Location.where(user_id: params[:user_id])
    render json: @locations
  end

  def show
    @location = Location.find(params[:id])
    render json: @location
  end

  
end
