class SageElementGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  def create_sage_element

    # Style Variables
    style_file = "app/assets/stylesheets/sage/system/patterns/elements/_#{file_name}.scss"
    style_include_file = "app/assets/stylesheets/sage/sage_system.css.scss"
    style_include_line = "// Elements"
    # Create Style File
    template "style.scss", style_file
    # Include Style File
    gsub_file style_include_file, /(#{Regexp.escape(style_include_line)})/mi do |match|
      "#{match}\n@import \"system/patterns/elements/#{file_name}\";"
    end

    # Markup Variables
    markup_file = "app/views/examples/elements/#{file_name}/_preview.html.erb"
    markup_include_file = "app/helpers/sage/elements_helper.rb"
    markup_include_line = "# Sage Generated Elements"
    # Create Markup File
    template "markup.html.erb", markup_file
    # Include Markup File
    gsub_file markup_include_file, /(#{Regexp.escape(markup_include_line)})/mi do |match|
      "#{match}\n        {\n          title: \"#{file_name}\",\n          description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\", \n          scss_design:  \"todo\",\n          scss_dev:     \"todo\",\n          scss_doc:     \"todo\",\n          rails_design: \"todo\",\n          rails_dev:    \"todo\",\n          rails_doc:    \"todo\",\n          react_design: \"todo\",\n          react_dev:    \"todo\",\n          react_doc:    \"todo\"\n        },"
    end

    # Props Variables
    markup_file = "app/views/examples/elements/#{file_name}/_props.html.erb"
    # Create Props File
    template "props.html.erb", markup_file

    # Rules Do Variables
    markup_file = "app/views/examples/elements/#{file_name}/_rules_do.html.erb"
    # Create Rules Do File
    template "rules_do.html.erb", markup_file

    # Rules Dont Variables
    markup_file = "app/views/examples/elements/#{file_name}/_rules_dont.html.erb"
    # Create Rules Dont File
    template "rules_dont.html.erb", markup_file

  end
end