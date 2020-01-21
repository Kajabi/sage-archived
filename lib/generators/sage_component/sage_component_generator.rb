class SageComponentGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  def create_sage_component

    # Style Variables
    style_file = "app/assets/stylesheets/sage/patterns/components/_#{file_name}.scss"
    style_include_file = "app/assets/stylesheets/sage.css.scss"
    style_include_line = "// Components"
    style_include_content = "#{match}\n@import \"sage/patterns/components/#{file_name}\";"
    # Create Style File
    template "style.scss", style_file
    # Include Style File
    gsub_file style_include_file, /(#{Regexp.escape(style_include_line)})/mi do |match|
      style_include_content
    end
    
    # Markup Variables
    markup_file = "app/views/example_components/#{file_name}/_preview.html.erb"
    markup_include_file = "app/helpers/sage/components_helper.rb"
    markup_include_line = "["
    markup_include_content = "#{match}\n        { title: \"#{file_name}\" },"
    # Create Markup File
    template "markup.html.erb", markup_file
    # Include Markup File
    gsub_file markup_include_file, /(#{Regexp.escape(markup_include_line)})/mi do |match|
      markup_include_content
    end

  end
end
