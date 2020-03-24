class SageUtilityGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  def create_sage_utility

    # Style Variables
    style_file = "app/assets/stylesheets/sage/system/utilities/_#{file_name}.scss"
    style_include_file = "app/assets/stylesheets/sage/sage_system.css.scss"
    style_include_line = "// Utilities"
    # Create Style File
    template "style.scss", style_file
    # Include Style File
    gsub_file style_include_file, /(#{Regexp.escape(style_include_line)})/mi do |match|
      "#{match}\n@import \"system/utilities/#{file_name}\";"
    end

    # Markup Variables
    markup_file = "app/views/sage/examples/utilities/#{file_name}/_preview.html.erb"
    markup_include_file = "app/helpers/sage/utilities_helper.rb"
    markup_include_line = "# Sage Generated Utilities"
    # Create Markup File
    template "markup.html.erb", markup_file
    # Include Markup File
    gsub_file markup_include_file, /(#{Regexp.escape(markup_include_line)})/mi do |match|
      "#{match}\n        { title: \"#{file_name}\" },"
    end

  end
end
