module Sage
  module ElementsHelper

    # Lists out all the available sage elements
    def sage_elements
      [
        { title: "Button", path: "button" },
      ]
    end

    # Sorts available elements based on alphabet
    def sorted_sage_emements
      sage_elements.sort_by { |h| h.first }
    end

  end
end
