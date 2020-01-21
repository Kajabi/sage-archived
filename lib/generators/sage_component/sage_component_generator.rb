class SageComponentGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  def create_sage_component
    style_path = "app/assets/stylesheets/sage/patterns/components/_#{file_name}.scss"
    markup_path = "app/views/example_components/#{file_name}/_preview.html.erb"
    style_line = "// Components"
    helper_line = "["

    template "markup.html.erb", markup_path
    template "style.scss", style_path

    gsub_file 'app/assets/stylesheets/sage.css.scss', /(#{Regexp.escape(style_line)})/mi do |match|
      "#{match}\n@import \"sage/patterns/components/#{file_name}\";"
    end
    gsub_file 'app/helpers/sage/components_helper.rb', /(#{Regexp.escape(helper_line)})/mi do |match|
      "#{match}\n        { title: \"#{file_name}\" },"
    end
  end
end
