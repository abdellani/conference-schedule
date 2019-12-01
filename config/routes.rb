Rails.application.routes.draw do

  root 'home_page#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope "/api" do
    resources :conferences, only: [:show, :index] do
      resources :sponsors,only:[:index],module: :conferences
      resources :exhibitors,only:[:index],module: :conferences
      resources :talks, only: [:show, :index], module: :conferences do
        resources :attendances, only: [:index], module: :talks
        resources :questions, only: [:index], module: :talks
      end
    end
  end
end
