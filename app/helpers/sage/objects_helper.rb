module Sage
  module ObjectsHelper
    ########################################################
    # STATUS KEY
    # Done : done
    # In Progress : doing
    # To-do : todo
    # Not applicable : no
    # Deprecated : stop
    ########################################################

    # Lists out all the available sage objects
    def sage_objects
      [
        # Sage Generated Objects
        {
          title: "live_avatar",
          description: "The Live Avatar object shows a user's profile image in a circular frame and allows for a few helpful modifications for different uses.",
          scss_design:  "doing",
          scss_dev:     "doing",
          scss_doc:     "doing",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        {
          title: "form_section",
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
          title: "tabs",
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
          title: "banner",
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
          title: "panel",
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
          title: "assistant",
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
          title: "nav",
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
          title: "sidebar",
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

    # Sorts available objects based on alphabet
    def sorted_sage_objects
      sage_objects.sort_by { |h| h[:title] }
    end

  end
end
