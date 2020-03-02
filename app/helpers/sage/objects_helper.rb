module Sage
  module ObjectsHelper

    # Lists out all the available sage objects
    def sage_objects
      [
        # Sage Generated Objects
        { title: "form_section" },
        { title: "tabs" },
        { title: "banner" },
        { title: "panel" },
        { title: "assistant" },
        { title: "content" },
        { title: "nav" },
        { title: "page" },
        { title: "sidebar" },
      ]
    end
    
    # Sorts available objects based on alphabet
    def sorted_sage_objects
      sage_objects.sort_by { |h| h[:title] }
    end

  end
end
