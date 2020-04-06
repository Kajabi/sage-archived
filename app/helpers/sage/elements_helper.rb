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
          title: "live_stream_wrapper",
          description: "A simple wrapper element for the Live stream application",
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "done",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        {
          title: "description",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "todo",
          rails_design: "done",
          rails_dev:    "doing",
          rails_doc:    "todo",
          react_design: "done",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        {
          title: "label",
          description: "Labels show concise metadata or indicate status in a compact format.",
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "done",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        {
          title: "tooltip",
          description: "Tooltips display helpful text when users hover over an element.",
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "done",
          rails_design: "todo",
          rails_dev:    "todo",
          rails_doc:    "todo",
          react_design: "todo",
          react_dev:    "todo",
          react_doc:    "todo"
        },
        {
          title: "form_input",
          description: "Basic text input form fields with 'floating' labels",
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "done",
          rails_design: "no",
          rails_dev:    "no",
          rails_doc:    "no",
          react_design: "no",
          react_dev:    "no",
          react_doc:    "no"
        },
        {
          title: "form_textarea",
          description: "Basic text area input field with 'floating' label",
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "done",
          rails_design: "no",
          rails_dev:    "no",
          rails_doc:    "no",
          react_design: "no",
          react_dev:    "no",
          react_doc:    "no"
        },
        {
          title: "loader",
          description: "Stylized loading animations for use with elements or objects",
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "done",
          rails_design: "no",
          rails_dev:    "no",
          rails_doc:    "no",
          react_design: "no",
          react_dev:    "no",
          react_doc:    "no"
        },
        {
          title: "checkbox",
          description: "Base checkbox styling",
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "done",
          rails_design: "no",
          rails_dev:    "no",
          rails_doc:    "no",
          react_design: "no",
          react_dev:    "no",
          react_doc:    "no"
        },
        {
          title: "switch",
          description: "Checkbox or radio element styled to appear as a toggle",
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "done",
          rails_design: "no",
          rails_dev:    "no",
          rails_doc:    "no",
          react_design: "no",
          react_dev:    "no",
          react_doc:    "no"
        },
        {
          title: "radio",
          description: "Base radio button styling",
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "done",
          rails_design: "no",
          rails_dev:    "no",
          rails_doc:    "no",
          react_design: "no",
          react_dev:    "no",
          react_doc:    "no"
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
          scss_design:  "done",
          scss_dev:     "done",
          scss_doc:     "done",
          rails_design: "no",
          rails_dev:    "no",
          rails_doc:    "no",
          react_design: "no",
          react_dev:    "no",
          react_doc:    "no"
        },
      ]
    end

    # Sorts available elements based on alphabet
    def sorted_sage_elements
      sage_elements.sort_by { |h| h[:title] }
    end

  end
end
