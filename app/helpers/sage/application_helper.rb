module Sage
  module ApplicationHelper
    
    def current?(key, path)
      "#{key}" if current_page? path
    end

    def sage_version
      Sage::VERSION
    end

  end
end
