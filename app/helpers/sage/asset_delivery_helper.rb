module Sage

  # Sage::AssetDeliveryHelper ensures the Sage Engine webpacker-gem view helpers
  # remain private while allowing delivery of compiled pack tags to the parent app.
  # This prevents collisions between multiple webpacker instances.
  module AssetDeliveryHelper
    include ActionView::Helpers::AssetTagHelper
    include Sage::WebpackerHelper
    extend self

    SAGE_PACK_NAME = "sageSystem"

    def stylesheet
      stylesheet_pack_tag(AssetDeliveryHelper::SAGE_PACK_NAME)
    end

    def javascript
      javascript_pack_tag(AssetDeliveryHelper::SAGE_PACK_NAME)
    end

  end
end
