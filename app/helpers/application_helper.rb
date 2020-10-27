module ApplicationHelper

  def current_page_design?
    current_page?(pages_index_path) || (params[:title] && current_page?(pages_design_path(params[:title])))
    @design_pages = [
      {
        name: "Introduction",
        path: pages_index_path,
      },
      {
        name: "Tokens",
        path: pages_design_path(:token),
      },
      {
        name: "Colors",
        path: pages_design_path(:color),
      },
      {
        name: "Typography",
        path: pages_design_path(:typography),
      },
      {
        name: "Icons",
        path: pages_design_path(:icon),
      },
      {
        name: "Containers",
        path: pages_design_path(:container),
      },
      {
        name: "Panels and Cards",
        path: pages_design_path(:panels_cards),
      },
      {
        name: "Grid",
        path: pages_design_path(:grid),
      },
      {
        name: "Grid Templates",
        path: pages_design_path(:grid_templates),
      }
    ]
  end

  def current_page_elements?
    current_page?(pages_elements_path) || (params[:title] && current_page?(pages_element_path(params[:title])))
  end

  def current_page_objects?
    current_page?(pages_objects_path) || (params[:title] && current_page?(pages_object_path(params[:title])))
  end

end
