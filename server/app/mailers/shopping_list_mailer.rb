class ShoppingListMailer < ApplicationMailer
  default from: 'darcyl1976@gmail.com'
  layout 'mailer'
  
  def shopping_email
    @user = params
    
    @url = 'http://pantryful.com'
    mail(to: @user[:email], subject: "Your grocery list")
    render json: @user
  end
end
