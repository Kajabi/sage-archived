module ApplicationHelper

  def current?(key, path)
    "#{key}" if current_page? path
  end

  def current_page_elements?
    current_page?(pages_elements_path) || (params[:title] && current_page?(pages_element_path(params[:title])))
  end

  def current_page_objects?
    current_page?(pages_objects_path) || (params[:title] && current_page?(pages_object_path(params[:title])))
  end

end
