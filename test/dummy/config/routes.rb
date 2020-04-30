Rails.application.routes.draw do

  root to: redirect("sage/pages/index")
  mount Sage::Engine => "/sage"

end
