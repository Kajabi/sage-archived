Rails.application.routes.draw do
  mount Lockup::Engine, at: "/lockup"

  root to: redirect("pages/index")

  get 'pages/item'
  get 'pages/status'
  get 'pages/breakout'
  get 'pages/index'
  get 'pages/voice'
  get 'pages/token'
  get 'pages/color'
  get 'pages/typography'
  get 'pages/grid'
  get 'pages/container'
  get 'pages/icon'
  get 'pages/elements'
  get 'pages/element'
  get 'pages/objects'
  get 'pages/object'
  get 'pages/utilities'

end
