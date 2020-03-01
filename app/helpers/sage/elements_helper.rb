module Sage
  module ElementsHelper

    # Lists out all the available sage elements
    def sage_elements
      [
        # Sage Generated Elements
        { title: "icon_button", description: "" },
        { title: "checkbox", description: "" },
        { title: "switch", description: "" },
        { title: "radio", description: "" },
        { title: "link_button", description: "" },
        { title: "danger_button", description: "" },
        { title: "button", description: "" },
      ]
    end

    # Sorts available elements based on alphabet
    def sorted_sage_elements
      sage_elements.sort_by { |h| h[:title] }
    end

  end
end
