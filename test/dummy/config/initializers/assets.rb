# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.precompile += %w( sage_docs.js )

Rails.application.config.assets.precompile << /\.(?:svg|eot|woff|ttf)$/
Rails.application.config.assets.precompile += %w( sage.css )
Rails.application.config.assets.precompile += %w( sage_docs.css )

Rails.application.config.assets.precompile += %w( sage/sage.svg )
Rails.application.config.assets.precompile += %w( sage/sage_icon.svg )
Rails.application.config.assets.precompile += %w( sage/sage_illustration.png )
Rails.application.config.assets.precompile += %w( sage/sage_structure.png )