require "sage/engine"
require "pry"

module Sage
  ROOT_PATH = Pathname.new(File.join(__dir__, ".."))
  # binding.pry

  class << self
    def webpacker
      @webpacker ||= ::Webpacker::Instance.new(
        root_path: ROOT_PATH,
        config_path: ROOT_PATH.join("config/webpacker.yml")
      )
    end
  end
end
