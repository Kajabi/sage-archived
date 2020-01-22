class SageTokenGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  def create_sage_token
    
    # Style Variables
    style_file = "app/assets/stylesheets/sage/tokens/_#{file_name}.scss"
    style_include_file = "app/assets/stylesheets/sage.css.scss"
    style_include_line = "// Variable Tokens"
    # Create Style File
    template "style.scss", style_file
    # Include Style File
    gsub_file style_include_file, /(#{Regexp.escape(style_include_line)})/mi do |match|
      "#{match}\n@import \"sage/tokens/#{file_name}\";"
    end

    # Markup Variables
    markup_include_file = "app/helpers/sage/tokens_helper.rb"
    markup_include_line = "def sage_tokens\n      ["
    # Include Markup File
    gsub_file markup_include_file, /(#{Regexp.escape(markup_include_line)})/mi do |match|
      "#{match}\n        {\n          category: \"#{file_name}\",\n          tokens: [\n            { name: \"default\" },\n          ]\n        },"
    end

    # Documentation Style Variables
    doc_include_file = "app/assets/stylesheets/sage_docs/_token.scss"
    doc_include_line = "// Generator Tokens"
    # Include Documentation Style
    gsub_file doc_include_file, /(#{Regexp.escape(doc_include_line)})/mi do |match|
      "#{match}\n  &-spacing:after { content: \"#{sage-spacing()}\" }\n  @each $name, $token in $sage-spacings {\n    &-spacing-#{$name}:after { content: \"#{$token}\" }\n  }"
    end

  end
end
