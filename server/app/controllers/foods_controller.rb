class FoodsController < ApplicationController
  def all
    @foods = Food.all
    render json: @foods
  end

  def users
    @foods = Food
      .left_outer_joins(:location)
      .where(location: {user_id: params[:user_id]})
    render json: @foods
  end

  def locations
    @foods = Food.where(location_id: params[:location_id]).where("quantity > 0")
    render json: @foods
  end

  def show
    @food = Food.find(params[:id])
    render json: @food
  end

  def create
    @food = Food.create!({
      :location_id => params[:location_id],
      :name => params[:name],
      :spoon_id => params[:spoon_id],
      :quantity => params[:quantity],
      :quantity_units => params[:quantity_units],
      :price_cents => params[:price_cents],
      :date_purchased => params[:date_purchased],
      :date_expires => params[:date_expires]
    })
    render json: @food
  end

  def update
    @food = Food.find(params[:id])
    @food.update!({
      :quantity => params[:quantity]
      })
    render json: @food
  end

  def autocomplete
    uri = URI('https://api.spoonacular.com/food/ingredients/autocomplete')
    spoonacular_query = { :apiKey => ENV['SPOONACULAR_API'], :number => 10, :query => params[:query] }
    uri.query = URI.encode_www_form(spoonacular_query)
    res = Net::HTTP.get_response(uri)
    render json: res.body
  end

  def barcode    
    upc = params[:barcode]
    uri = URI("https://world.openfoodfacts.org/api/v0/product/#{upc}.json")    
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
