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
          title: "live_user_control",
          description: "The Live User Control is a button class that presents a variety of icons and interactive states related to the Live feature's user controls.",
          scss_design:  "doing",
          scss_dev:     "doing",
          scss_doc:     "doing",
          rails_design: "no",
          rails_dev:    "no",
          rails_doc:    "no",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        {
          title: "live_active_mic",
          description: "The Live Active Mic icon is an animatable icon that shows a fill color rise and fall in the icon shape based on a given volume level.",
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "done",
          rails_design: "no",
          rails_dev:    "no",
          rails_doc:    "no",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
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
