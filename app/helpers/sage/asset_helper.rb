module Sage
  module AssetHelper
    # NOTE: Sage::AssetHelper is included in Kajabi-Products.
    #       Please _only_ define helpers here for use within the main application.

    SYSTEM_PACK_NAME = "sageSystem"
    include Sage::WebpackerHelper

    def include_sage_stylesheet
      stylesheet_pack_tag(AssetHelper::SYSTEM_PACK_NAME)
      # pack_tag :stylesheet, AssetHelper::SYSTEM_PACK_NAME
    end

    def include_sage_javascript
      javascript_pack_tag(AssetHelper::SYSTEM_PACK_NAME)
      # pack_tag :stylesheet, AssetHelper::SYSTEM_PACK_NAME
    end

    private

    # def pack_tag(method, pack_name)
    #   if production?
    #     nil # Return compiled asset
    #   else

    #   end
    # end

    # def production?
    #   ENV["RAILS_ENV"] == "production" || !ENV["SAGE_RUN_AS_DEVELOPMENT"]
    # end

  end
end
