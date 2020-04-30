module Sage

  # NOTE: Sage::SageHelper is publicly exposed in Kajabi-Products.
  #       Please only add helpers here for use within the main app.

  module SageHelper
    include Sage::WebpackerHelper

    def sage_system_stylesheet
      stylesheet_pack_tag("application")
    end

    def sage_system_javascript
      javascript_pack_tag("application")
    end
  end
end
