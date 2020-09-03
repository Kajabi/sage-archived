require_relative "view_helpers"

module SageRails
  class Railtie < Rails::Railtie
    initializer "sage_rails.view_helpers" do
      ActiveSupport.on_load(:action_view) { include SageRails::ViewHelpers }
    end
  end
end
