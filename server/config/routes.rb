Rails.application.routes.draw do
  get 'shelf/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :foods, only: [:show, :new]
  
  resources :users, only: [:show] do
    resources :locations, only: [:index]
    resources :foods, only: [:index]
  end

  resources :users do
    resources :locations do
      resources :shelf, only: [:index] do
        resources :foods, only: [:index]
      end
    end
  end
end
