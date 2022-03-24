

class FoodsController < ApplicationController
  def all
    @foods = Food.all
    render json: @foods
  end

  def index
    @foods = Food.where(location_id: params[:location_id])
    render json: @foods
  end

  def show
    @food = Food.find(params[:id])
    render json: @food
  end

  def user
    @foods = Food
      .left_outer_joins(:location)
      .where(location: {user_id: params[:user_id]})
    render json: @foods
  end

  def new
    uri = URI('https://api.spoonacular.com/food/ingredients/autocomplete')
    spoonacular_query = { :apiKey => ENV['SPOONACULAR_API'], :number => 10, :query => params[:query] }
    uri.query = URI.encode_www_form(spoonacular_query)
    res = Net::HTTP.get_response(uri)
    render json: res.body
  end

  def reset_database
    tables = ActiveRecord::Base.connection.tables
    tables.delete 'schema.migrations'
    tables.each do |table|
      ActiveRecord::Base.connection.execute("TRUNCATE #{table}")
    end
    Rails.application.load_seed if params['seed'] == true
  end
end
