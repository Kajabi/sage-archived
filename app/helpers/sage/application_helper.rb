module Sage
  module ApplicationHelper
  # binding.pry
    def current?(key, path)
      "#{key}" if current_page? path
    end

  end
end
