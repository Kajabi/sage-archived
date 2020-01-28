module Sage
  module ComponentsHelper

    # Lists out all the available sage components
    def sage_components
      [
        { title: "sage_tabs" },
        { title: "banner" },
        { title: "panel" },
      ]
    end
    
    # Sorts available components based on alphabet
    def sorted_sage_components
      sage_components.sort_by { |h| h[:title] }
    end

  end
end
