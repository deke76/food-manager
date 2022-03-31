class ShoppingListMailer < ApplicationMailer
  default from: 'darcyl1976@gmail.com'
  layout 'mailer'
  
  def shopping_email
    @user = params[:user]
    @url = 'pantryful.com'
    @ingredients = params[:ingredients]
    @email = params[:email]
    @title = params[:title]
    @image = params[:image]
    @recipeid = params[:recipeid]
    @recipe_url = 'http://spoonacular.com/recipes/' + @title + '-' + @recipeid
    puts @recipe_url
    mail(to: @email, subject: "Your grocery list", ingredients: @ingredients, title: @title, image: @image, recipe_url: @recipe_url)
    render json: @user
  end

  
end
