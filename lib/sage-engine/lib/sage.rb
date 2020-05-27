require "sage/engine"

module Sage
  class << self
    def webpacker
      @webpacker ||= ::Webpacker::Instance.new(
        root_path: Sage::Engine.root,
        config_path: Sage::Engine.root.join("config/webpacker.yml")
      )
    end
  end
end
