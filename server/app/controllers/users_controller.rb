class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def email
    @user = params[:id]
    render json params
    # Tell the UserMailer to send a welcome email after save
    # UserMailer.with(user: @user).welcome_email.deliver_now
    # format.html { redirect_to(@user, notice: 'User was successfully created.') }
    # format.json { render json: @user, status: :created, location: @user }
  end

  def email
    render json: params
  end
  
  # def show
  #   locations = Location.where(user_id: params[:id])
  #   foods = Food.where(user_id: params[:id])
  #   @user = { 'locations' => locations, 'shelves' => shelves, 'foods' => foods }
  #   render json: @user
  # end
end
