class UserMailer < ApplicationMailer
  default from: 'darcy.lauder@shaw.ca'

  def shopping_list
    @user = params[:user]
    @url = 'http://pantryful.com/recipes'
    mail(to: @)
end
