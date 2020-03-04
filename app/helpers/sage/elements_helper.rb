module Sage
  module ElementsHelper
    ########################################################
    # STATUS KEY
    # Done : done 
    # In Progress : doing 
    # To-do : todo 
    # Not applicable : no 
    # Deprecated : stop
    ########################################################

    # Lists out all the available sage elements
    def sage_elements
      [
        # Sage Generated Elements
        {
          title: "loader",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          scss_design:  "todo",
          scss_dev:     "todo",
          scss_doc:     "todo",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        { 
          title: "icon_button", 
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          scss_design:  "todo",
          scss_dev:     "todo",
          scss_doc:     "todo",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        { 
          title: "checkbox", 
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          scss_design:  "todo",
          scss_dev:     "todo",
          scss_doc:     "todo",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        { 
          title: "switch", 
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          scss_design:  "todo",
          scss_dev:     "todo",
          scss_doc:     "todo",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        { 
          title: "radio", 
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          scss_design:  "todo",
          scss_dev:     "todo",
          scss_doc:     "todo",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        { 
          title: "link_button", 
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          scss_design:  "todo",
          scss_dev:     "todo",
          scss_doc:     "todo",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        { 
          title: "danger_button", 
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          scss_design:  "todo",
          scss_dev:     "todo",
          scss_doc:     "todo",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        { 
          title: "button", 
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          scss_design:  "todo",
          scss_dev:     "todo",
          scss_doc:     "todo",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
      ]
    end

    # Sorts available elements based on alphabet
    def sorted_sage_elements
      sage_elements.sort_by { |h| h[:title] }
    end

  end
end
