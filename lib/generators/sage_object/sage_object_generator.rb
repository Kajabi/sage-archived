class SageObjectGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  def create_sage_object

    # Style Variables
    style_file = "app/assets/stylesheets/sage/patterns/objects/_#{file_name}.scss"
    style_include_file = "app/assets/stylesheets/sage.css.scss"
    style_include_line = "// Objects"
    # Create Style File
    template "style.scss", style_file
    # Include Style File
    gsub_file style_include_file, /(#{Regexp.escape(style_include_line)})/mi do |match|
      "#{match}\n@import \"sage/patterns/objects/#{file_name}\";"
    end
    
    # Markup Variables
    markup_file = "app/views/sage/examples/objects/#{file_name}/_preview.html.erb"
    markup_include_file = "app/helpers/sage/objects_helper.rb"
    markup_include_line = "# Sage Generated Objects"
    # Create Markup File
    template "markup.html.erb", markup_file
    # Include Markup File
    gsub_file markup_include_file, /(#{Regexp.escape(markup_include_line)})/mi do |match|
      "#{match}\n        { title: \"#{file_name}\" },"
    end

  end
end
