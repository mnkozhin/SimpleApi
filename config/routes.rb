Rails.application.routes.draw do
  get 'mainpage/index'
root 'mainpage#index'
  resources :mainpage
	
get "/current_day", to: "days#api"

end
