class RecipesController < FoodsController 
  def index
    uri = URI("https://api.spoonacular.com/recipes/findByIngredients")
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
end