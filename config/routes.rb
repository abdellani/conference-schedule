Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope "/api" do
    resources :users,only: [:create] 
    scope :users do
      resources :sessions,only: [:create],module: :users
      delete "/sessions", to: "users/sessions#destroy", module: :users
    end
    resources :conferences, only: [:show, :index] do
      resources :sponsors,only:[:index],module: :conferences
      resources :exhibitors,only:[:index],module: :conferences
      resources :attendances, only: [:index], module: :conferences
      resources :speakers, only: [:index], module: :conferences
      resources :talks, only: [:show, :index], module: :conferences do
        resources :attendances, only: [:index,:create], module: :talks
        resources :questions, only: [:index,:create], module: :talks
      end
    end
  end
  root 'home_page#index'
  get '*path', to: 'home_page#index'
end
