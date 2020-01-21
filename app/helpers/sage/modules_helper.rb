module Sage
  module ModulesHelper

    # Lists out all the available sage modules
    def sage_modules
      [
        { title: "Assistant", path: "assistant" },
        { title: "Content", path: "content" },
        { title: "Nav", path: "nav" },
        { title: "Page", path: "page" },
        { title: "Sidebar", path: "sidebar" },
      ]
    end

    # Sorts available modules based on alphabet
    def sorted_sage_modules
      sage_modules.sort_by { |h| h.first }
    end

  end
end
