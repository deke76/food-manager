class ShoppingListMailer < ApplicationMailer
  default from: 'darcyl1976@gmail.com'
  layout 'mailer'
  
  def shopping_email
    @user = params[:user]
    @url = 'pantryful.com'
    @ingredients = params[:ingredients]
    # puts '***************************************'
    # puts @ingredients
    # puts '***************************************'
    @email = params[:email]
    mail(to: @email, subject: "Your grocery list", ingredients: @ingredients)
    render json: @user
  end

  
end
