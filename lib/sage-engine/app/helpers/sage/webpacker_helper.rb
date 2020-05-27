module Sage
  module WebpackerHelper
    include ::Webpacker::Helper

    def current_webpacker_instance
      Sage.webpacker
    end

  end
end
