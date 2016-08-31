Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'games#index'
  resources :users do
    resources :games
  end


end
