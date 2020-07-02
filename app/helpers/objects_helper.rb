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
        title: "input_helper",
        description: "Provides an extended tooltip/popup for text inputs",
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
        title: "input_group",
        description: "Allows inline grouping of text inputs with buttons",
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
        title: "billboard",
        description: "A billboard is composed of a full-width background image, a title, and supporting copy.",
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
        title: "pagination",
        description: "Pagination is used for splitting up results into several pages and provides controls for navigating to the next or previous page.",
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
        title: "banner",
        description: "A banner that displays at the top of the page, used for systemwide notifications and events.",
        scss_design:  "done",
        scss_dev:     "done",
        scss_doc:     "done",
        rails_design: "done",
        rails_dev:    "done",
        rails_doc:    "done",
        react_design: "todo",
        react_dev:    "todo",
        react_doc:    "todo"
      },
      {
        title: "page_heading",
        description: "Page headings are used at the top of pages and contain the title of the page along with an optional navigation link to the previous page.",
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
        title: "card",
        description: "A card presents content and can guide the user toward a related action.",
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
        title: "avatar",
        description: "The Avatar object shows a user's profile image in a circular frame and allows for a few helpful modifications for different uses.",
        scss_design:  "done",
        scss_dev:     "done",
        scss_doc:     "done",
        rails_design: "no",
        rails_dev:    "no",
        rails_doc:    "no",
        react_design: "done",
        react_dev:    "done",
        react_doc:    "done"
      },
      {
        title: "dropdown",
        description: "Sage dropdown",
        scss_design:  "done",
        scss_dev:     "done",
        scss_doc:     "done",
        rails_design: "done",
        rails_dev:    "done",
        rails_doc:    "done",
        react_design: "todo",
        react_dev:    "todo",
        react_doc:    "todo"
      },
      {
        title: "form_section",
        description: "A form section generally consists of a text section to provide users with instruction, guidance, or related information along with a secondary panel that may contain form inputs and/or related general content.",
        scss_design:  "done",
        scss_dev:     "done",
        scss_doc:     "done",
        rails_design: "done",
        rails_dev:    "done",
        rails_doc:    "done",
        react_design: "todo",
        react_dev:    "todo",
        react_doc:    "todo"
      },
      {
        title: "tabs",
        description: "Tabs organize related content across screens, data sets, and can be used for navigation to related destinations.",
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
        title: "alert",
        description: "Alerts are used to indicate user-driven notifications.",
        scss_design:  "done",
        scss_dev:     "done",
        scss_doc:     "done",
        rails_design: "done",
        rails_dev:    "done",
        rails_doc:    "done",
        react_design: "todo",
        react_dev:    "todo",
        react_doc:    "todo"
      },
      {
        title: "panel",
        description: "Panels are used as multi-purpose containers for a variety of content.",
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
        description: "Page header with optional side menu toggle button.",
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
        title: "nav",
        description: "Nav is a hierarchical, vertical navigation and can include nested menu items.",
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
        title: "sidebar",
        description: "The sidebar object is a fixed, vertical panel that typically displays navigation and/or page hierarchy.",
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
        title: "modal",
        description: "Sage modal",
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
    ]
  end

  # Sorts available objects based on alphabet
  def sorted_sage_objects
    sage_objects.sort_by { |h| h[:title] }
  end

  # Archive of deprecated objects
  def sage_deprecated_objects
    [
      {
        title: "live_stream_video_grid",
        description: "Adds the video grid setup for live stream. Toggle the `--fullscreen-demo` modifier on the wrapper to see at full screen.",
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
        title: "live_stream_footer",
        description: "Footer component for the Live stream application. Contains an \"awake\" variation as well as the constant form. Must be nested within a wrapper as shown below.",
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
        title: "live_stream_header",
        description: "Header component for the Live stream application. Contains an \"awake\" variation as well as the constant form. Must be nested within a wrapper as shown below.",
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
        title: "live_stream_control",
        description: "The Live Stream Controls are a special class of button used in the frame for Live Streams.",
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
        title: "live_profile_card",
        description: "Live Profile Cards are used to show the users logged into a Live session. Their role in the session will affect what content is visible and whether or not they are also given a ring around their avatar. They are organized into groups based on their role in the meeting.",
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
        title: "live_user_control",
        description: "The Live User Control is a button class that presents a variety of icons and interactive states related to the Live feature's user controls.",
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
        title: "live_active_mic",
        description: "The Live Active Mic icon is an animatable icon that shows a fill color rise and fall in the icon shape based on a given volume level.",
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
        title: "live_option_menu",
        description: "Live option menu is an accessible contextual menu to be used within the Live feature set. When the user clicks on an anchor the menu appears and stays until the user clicks somewhere else or on a given command from the menu.",
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

  # Sorts deprecated objects based on alphabet
  def sorted_sage_deprecated_objects
    sage_deprecated_objects.sort_by { |h| h[:title] }
  end

  # Full list of active and deprecated objects
  def sage_all_objects
    sage_objects | sage_deprecated_objects
  end

  # Sorts full list of active and deprecated objects based on alphabet
  def sorted_sage_all_objects
    sage_all_objects.sort_by { |h| h[:title] }
  end

end
