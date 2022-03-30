class ShoppingListMailer < ApplicationMailer
  default from: 'darcy.lauder@shaw.ca'
  layout 'mailer'
  
  def shopping_email
    @user = params
    @url = 'http://pantryful.com'
    
    mail(to: @user[:email], subject: "Your grocery list")
  end
end
