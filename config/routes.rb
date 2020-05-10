Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users # , only: [:create, :show, :index, :patch]
    resource :session, only: [:create, :destroy, :show]
    resources :pictures, only: [:create, :index, :destroy]
    resources :follows, only: [:create, :index, :destroy]
    resources :comments, only: [:create, :index, :show]
  end
  get '/api/pictures/discover_posts' => "api/pictures#discover_posts"

  root to: 'static_pages#root'
end
