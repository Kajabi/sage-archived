class SageComponentGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  def create_sage_component
    create_file "app/views/example_components/#{file_name}/#{file_name}.html.erb", "<div class=\"sage-#{file_name}\">\n\n</div>"
    create_file "app/assets/stylesheets/sage/patterns/components/_#{file_name}.scss", "/*------------------------------------*/\n/*-- #{file_name} component */\n/*------------------------------------*/\n\n.sage-#{file_name} {\n  \n  /* #{file_name} responsive styles */\n  @media (max-width: sage-breakpoint()) {\n    \n  }\n}"
  end
end
