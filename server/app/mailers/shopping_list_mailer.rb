class ShoppingListMailer < ApplicationMailer
  default from: 'darcyl1976@gmail.com'
  layout 'mailer'
  
  def shopping_email
    @user = params
    
    @url = 'http://pantryful.com'
    puts @user
    puts ' LINE 8 Shopping List mailer'
    mail(to: @user[:email], subject: "Your grocery list")
    render json: @user
  end
end
