require "sass-rails" # AJM – REMOVE ON ASSETPIPELINE RIP
require "autoprefixer-rails" # AJM – REMOVE ON ASSETPIPELINE RIP
require "inline_svg" # AJM – REMOVE ON ASSETPIPELINE RIP

module Sage
  class Engine < ::Rails::Engine
    isolate_namespace Sage

    config.middleware.use(
      Rack::Static,
      urls: ["/sage/packs"], root: Sage::Engine.root.join("tmp")
    )

    # REMOVE FOR NOW MAY NEED TO ONLY INIT ON ENV = DEV
    initializer "webpacker.proxy" do |app|
      insert_middleware = begin
        Sage.webpacker.config.dev_server.present?
      rescue
        nil
      end

      next unless insert_middleware

      app.middleware.insert_before(
        0,
        "Webpacker::DevServerProxy", # use a string if Rails version < 5
        ssl_verify_none: true,
        webpacker: Sage.webpacker
      )
    end
  end
end
