class SageElementGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  def create_sage_element
    style_line = "// Elements"
    helper_line = "["
    create_file "app/views/example_elements/#{file_name}/_preview.html.erb", "<div class=\"sage-#{file_name}\"></div>"
    create_file "app/assets/stylesheets/sage/patterns/elements/_#{file_name}.scss", "/*------------------------------------*/\n/*-- #{file_name} element */\n/*------------------------------------*/\n\n.sage-#{file_name} {\n  \n  /* #{file_name} responsive styles */\n  @media (max-width: sage-breakpoint()) {\n    \n  }\n}"
    gsub_file 'app/assets/stylesheets/sage.css.scss', /(#{Regexp.escape(style_line)})/mi do |match|
      "#{match}\n@import \"sage/patterns/elements/#{file_name}\";"
    end
    gsub_file 'app/helpers/sage/elements_helper.rb', /(#{Regexp.escape(helper_line)})/mi do |match|
      "#{match}\n        { title: \"#{file_name}\", path: \"#{file_name}\" },"
    end
  end
end
