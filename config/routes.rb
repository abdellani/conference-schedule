Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope "/api" do
    resources :conferences, only: [:show,:index] do
      resources :talks, only: [:show,:index] do
        resources :questions, only: [:index]
      end
    end
  end
end
