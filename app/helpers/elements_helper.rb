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
        title: "breadcrumbs",
        description: "Breadcrumbs provide a sense of where we are in the site structure with hyperlinks to previous areas in that structure. Our element also provides a specific \"Back link\" variation",
        scss_design:  "doing",
        scss_dev:     "doing",
        scss_doc:     "doing",
        rails_design: "doing",
        rails_dev:    "doing",
        rails_doc:    "doing",
        react_design: "todo",
        react_dev:    "todo",
        react_doc:    "todo"
      },
      {
        title: "meter",
        description: "A horizontal display indicating the measurement of a known (finite) quantity",
        scss_design:  "done",
        scss_dev:     "done",
        scss_doc:     "done",
        rails_design: "doing",
        rails_dev:    "doing",
        rails_doc:    "doing",
        react_design: "todo",
        react_dev:    "todo",
        react_doc:    "todo"
      },
      {
        title: "form_select",
        description: "The form select presents a selectable menu of options. The options within the menu are represented by <option> elements.",
        scss_design:  "done",
        scss_dev:     "done",
        scss_doc:     "todo",
        rails_design: "todo",
        rails_dev:    "todo",
        rails_doc:    "todo",
        react_design: "todo",
        react_dev:    "todo",
        react_doc:    "todo"
      },
      {
        title: "description",
        description: "A description is composed of title and data content and is structured as a definition list.",
        scss_design:  "done",
        scss_dev:     "done",
        scss_doc:     "done",
        rails_design: "done",
        rails_dev:    "done",
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
        scss_doc:     "todo",
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
        description: "Checkboxes provide users with selectable options like toggling a single setting or selecting multiple options from a list.",
        scss_design:  "done",
        scss_dev:     "done",
        scss_doc:     "todo",
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
        description: "Radio elements provide users a way to select only one option from a list of two or more options.",
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
        title: "button",
        description: "Standard button styling with multiple display options. Can be applied on both button and link elements.",
        scss_design:  "done",
        scss_dev:     "done",
        scss_doc:     "done",
        rails_design: "done",
        rails_dev:    "done",
        rails_doc:    "done",
        react_design: "no",
        react_dev:    "no",
        react_doc:    "no"
      },
      {
        title: "table",
        description: "Basic table element",
        scss_design:  "doing",
        scss_dev:     "doing",
        scss_doc:     "doing",
        rails_design: "todo",
        rails_dev:    "todo",
        rails_doc:    "todo",
        react_design: "todo",
        react_dev:    "todo",
        react_doc:    "todo"
      }
    ]
  end

  # Sorts available elements based on alphabet
  def sorted_sage_elements
    sage_elements.sort_by { |h| h[:title] }
  end

  # Archive of deprecated elements
  def sage_deprecated_elements
    [
      {
        title: "live_stream_wrapper",
        description: "A simple wrapper element for the Live stream application",
        scss_design:  "stop",
        scss_dev:     "stop",
        scss_doc:     "stop",
        rails_design: "no",
        rails_dev:    "no",
        rails_doc:    "no",
        react_design: "stop",
        react_dev:    "stop",
        react_doc:    "stop"
      },
      {
        title: "link_button",
        description: "",
        scss_design:  "stop",
        scss_dev:     "stop",
        scss_doc:     "stop",
        rails_design: "no",
        rails_dev:    "no",
        rails_doc:    "no",
        react_design: "stop",
        react_dev:    "stop",
        react_doc:    "stop"
      },
    ]
  end

  # Sorts deprecated elements based on alphabet
  def sorted_sage_deprecated_elements
    sage_deprecated_elements.sort_by { |h| h[:title] }
  end

  # Full list of active and deprecated elements
  def sage_all_elements
    sage_elements | sage_deprecated_elements
  end

  # Sorts full list of active and deprecated elements based on alphabet
  def sorted_sage_all_elements
    sage_all_elements.sort_by { |h| h[:title] }
  end

end
