module Sage
  module SharedHelper
    include Sage::WebpackerHelper

    def sage_system_stylesheet
      stylesheet_pack_tag("application")
    end

    def sage_system_javascript
      javascript_pack_tag("application")
    end

    private

    def local_sage_gem
      ENV["LOCAL_SAGE_GEM"] == "true"
    end

  end
end
