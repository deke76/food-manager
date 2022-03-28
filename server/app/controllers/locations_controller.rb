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

  def create
    @location = Location.create!({
      :name => params[:name], 
      :user_id => params[:user_id],
      :country => params[:country],
      :city => params[:city],
      :province => params[:province]
      })
    render json: @location
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    render json: @location
  end
  
end
