class RecipesController < FoodsController 
  def index
    uri_string = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + params[:ingredients]
    uri = URI(uri_string)
    spoonacular_query = { :apiKey => ENV['SPOONACULAR_API'], :number => 10, :ingredients => params[:ingredients] }
    uri.query = URI.encode_www_form(spoonacular_query)
    res = Net::HTTP.get_response(uri)
    render json: res.body
  end

  def show
    id = params[:id]
    uri = URI("https://api.spoonacular.com/recipes/#{id}/information")
    spoonacular_query = { :apiKey => ENV['SPOONACULAR_API'] }
    uri.query = URI.encode_www_form(spoonacular_query)
    res = Net::HTTP.get_response(uri)
    render json: res.body
  end

  def email
    @user = User.find(params[:id])
    @ingredients = params[:ingredients].split(',')
    @title = params[:title]
    @image = params[:image]
    @id = params[:id]
    @recipeid = params[:recipeid]
    puts @recipeid
    ShoppingListMailer.with(email: @user[:email], ingredients: @ingredients, user: @user, title: @title, image: @image, recipeid: @recipeid).shopping_email.deliver_now
    render json: @ingredients
  end
end