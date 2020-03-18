require "webpacker/helper"

module Sage
  module ApplicationHelper
    include ::Webpacker::Helper

    def current_webpacker_instance
      Sage.webpacker
    end

    def current?(key, path)
      "#{key}" if current_page? path
    end

  end
end
