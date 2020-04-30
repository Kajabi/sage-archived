require "sass-rails" # DELETE AJM
require "autoprefixer-rails" # DELETE AJM
require "inline_svg" # DELETE AJM

# module Sage
#   class Engine < ::Rails::Engine
#     isolate_namespace Sage
#   end
# end
# require "webpacker" ## AJM

module Sage
  class Engine < ::Rails::Engine
    isolate_namespace Sage

    # binding.pry
    initializer "webpacker.proxy" do |app|
      insert_middleware = begin
        Sage.webpacker.config.dev_server.present?
      rescue
        nil
      end

      next unless insert_middleware
      app.middleware.insert_before(
        0,
        "Webpacker::DevServerProxy", # "Webpacker::DevServerProxy" as a string if Rails version < 5
        ssl_verify_none: true,
        webpacker: Sage.webpacker
      )
    end
  end
end
