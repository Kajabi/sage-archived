class SagePageGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  def create_sage_component
    
    # Page Variables
    page_file = "app/views/sage/pages/#{file_name}.html.erb"
    page_include_file_controller = "app/controllers/sage/pages_controller.rb"
    page_include_line_controller = "]"
    page_include_file_routes = "config/routes.rb"
    page_include_line_routes = "do"
    # Create Page File
    template "page.html.erb", markup_file
    # Include Page File In Controller
    gsub_file page_include_file_controller, /(#{Regexp.escape(page_include_line_controller)})/mi do |match|
      "#{match}\n    def #{file_name}\n    end"
    end
    # Include Page File In Routes
    gsub_file page_include_file_routes, /(#{Regexp.escape(page_include_line_routes)})/mi do |match|
      "#{match}\n  get 'pages/#{file_name}'\n"
    end

  end
end
