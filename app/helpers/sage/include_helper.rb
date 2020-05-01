module Sage

  # NOTE: Sage::IncludeHelper is included in Kajabi-Products.
  #       Please _only_ define helpers here for use within the main application.

  module IncludeHelper
    PACK_NAME = "application"

    include Sage::WebpackerHelper

    def include_sage_stylesheet
      # if use_production_assets?
      #   return "do Something"
      # end

      stylesheet_pack_tag(IncludeHelper::PACK_NAME)
    end

    def include_sage_javascript
      # if use_production_assets?
      #   return "do Something"
      # end

      javascript_pack_tag(IncludeHelper::PACK_NAME)
    end

    private

    def use_production_assets?
      false
      # ENV["RAILS_ENV"] == "production" || !ENV["SAGE_RUN_AS_DEVELOPMENT"]
    end

  end
end
