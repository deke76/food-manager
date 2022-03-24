class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    locations = Location.where(user_id: params[:id])
    foods = Food.where(user_id: params[:id])
    @user = { 'locations' => locations, 'shelves' => shelves, 'foods' => foods }
    render json: @user
  end
end
