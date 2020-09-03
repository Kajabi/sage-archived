module SageRails
  class Railtie < Rails::Railtie
    initializer "sage_rails.view_helpers" do
      ActiveSupport.on_load :action_view do
        require "sage_rails/view_helpers"
        include SageRails::ViewHelpers
      end
    end
  end
end
