Rails.application.routes.draw do

  get 'pages/index'

  mount Sage::Engine => "/sage"
end
