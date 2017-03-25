Rails.application.routes.draw do
  root 'pages#index'
  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :create, :destroy, :update]
    end
  end
end
