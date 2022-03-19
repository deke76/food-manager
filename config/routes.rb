Rails.application.routes.draw do
  
  root 'pages#home'

  resources :food_items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  if Rails.env.test?
    namespace :test do
      post 'reset_database', to: 'food_items#reset_database'
    end
  end
end
