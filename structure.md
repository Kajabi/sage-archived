```
.
├── Gemfile
├── Gemfile.lock
├── MIT-LICENSE
├── README.md
├── Rakefile
├── app
│   ├── assets
│   │   ├── images
│   │   ├── javascript
│   │   └── stylesheets
│   ├── controllers
│   │   ├── application_controller.rb
│   │   ├── concerns
│   │   └── pages_controller.rb
│   ├── helpers
│   │   ├── application_helper.rb
│   │   ├── elements_helper.rb
│   │   ├── objects_helper.rb
│   │   ├── tokens_helper.rb
│   │   └── utilities_helper.rb
│   ├── mailers
│   ├── models
│   │   └── concerns
│   └── views
│       ├── application
│       │   ├── _assistant.html.erb
│       │   ├── _content_skip_link.html.erb
│       │   ├── _meta.html.erb
│       │   ├── _scripts.html.erb
│       │   ├── _sidebar.html.erb
│       │   ├── _sidebar_elements.html.erb
│       │   ├── _sidebar_objects.html.erb
│       │   ├── _sidebar_styles.html.erb
│       │   ├── _status_item.html.erb
│       │   ├── _status_key.html.erb
│       │   └── _styles.html.erb
│       ├── examples
│       │   ├── elements
│       │   │   ├── _element.html.erb
│       │   │   ├── _element_preview.html.erb
│       │   │   ├── button
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── checkbox
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── danger_button
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── description
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── form_input
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── form_select
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── form_textarea
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── label
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── link_button
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── live_stream_wrapper
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── loader
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── radio
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── switch
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── table
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   └── tooltip
│       │   │       ├── _markup.html.erb
│       │   │       ├── _preview.html.erb
│       │   │       ├── _props.html.erb
│       │   │       ├── _rules_do.html.erb
│       │   │       └── _rules_dont.html.erb
│       │   ├── objects
│       │   │   ├── _object.html.erb
│       │   │   ├── _object_preview.html.erb
│       │   │   ├── alert
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── assistant
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── banner
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── billboard
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── card
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── content
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── form_section
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── live_active_mic
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── live_avatar
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── live_option_menu
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── live_profile_card
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── live_stream_control
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── live_stream_footer
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── live_stream_header
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── live_stream_video_grid
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── live_user_control
│       │   │   │   ├── _markup.html.erb
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── nav
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── page
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── page_heading
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── pagination
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── panel
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   ├── sidebar
│       │   │   │   ├── _preview.html.erb
│       │   │   │   ├── _props.html.erb
│       │   │   │   ├── _rules_do.html.erb
│       │   │   │   └── _rules_dont.html.erb
│       │   │   └── tabs
│       │   │       ├── _preview.html.erb
│       │   │       ├── _props.html.erb
│       │   │       ├── _rules_do.html.erb
│       │   │       └── _rules_dont.html.erb
│       │   ├── shared
│       │   │   ├── _heading.html.erb
│       │   │   ├── _props.html.erb
│       │   │   ├── _quick_links.html.erb
│       │   │   └── _rules.html.erb
│       │   └── utilities
│       │       ├── _utility.html.erb
│       │       └── media
│       │           └── _preview.html.erb
│       ├── layouts
│       │   ├── application.html.erb
│       │   └── breakout.html.erb
│       └── pages
│           ├── _color_values.html.erb
│           ├── breakout.html.erb
│           ├── color.html.erb
│           ├── container.html.erb
│           ├── element.html.erb
│           ├── elements.html.erb
│           ├── grid.html.erb
│           ├── icon.html.erb
│           ├── index.html.erb
│           ├── object.html.erb
│           ├── objects.html.erb
│           ├── status.html.erb
│           ├── token.html.erb
│           ├── typography.html.erb
│           └── utilities.html.erb
├── babel.config.js
├── bin
│   ├── bundle
│   ├── rails
│   ├── rake
│   ├── sage-local-link.sh
│   ├── setup
│   ├── webpack
│   └── webpack-dev-server
├── config
│   ├── application.rb
│   ├── boot.rb
│   ├── database.yml
│   ├── environment.rb
│   ├── environments
│   │   ├── development.rb
│   │   ├── production.rb
│   │   └── test.rb
│   ├── initializers
│   │   ├── assets.rb
│   │   ├── backtrace_silencers.rb
│   │   ├── cookies_serializer.rb
│   │   ├── filter_parameter_logging.rb
│   │   ├── inflections.rb
│   │   ├── mime_types.rb
│   │   ├── session_store.rb
│   │   ├── to_time_preserves_timezone.rb
│   │   └── wrap_parameters.rb
│   ├── locales
│   │   └── en.yml
│   ├── routes.rb
│   ├── secrets.yml
│   ├── webpack
│   │   ├── development.js
│   │   ├── environment.js
│   │   ├── production.js
│   │   └── test.js
│   └── webpacker.yml
├── config.ru
├── db
│   ├── development.sqlite3
│   └── seeds.rb
├── lib
│   ├── sage-engine
│   │   ├── app
│   │   │   ├── assets
│   │   │   │   ├── images
│   │   │   │   ├── javascripts
│   │   │   │   └── stylesheets
│   │   │   ├── controllers
│   │   │   ├── helpers
│   │   │   └── views
│   │   ├── config
│   │   │   └── initializers
│   │   │       └── assets.rb
│   │   ├── generators
│   │   │   ├── sage_element
│   │   │   │   ├── USAGE
│   │   │   │   ├── sage_element_generator.rb
│   │   │   │   └── templates
│   │   │   │       ├── markup.html.erb
│   │   │   │       ├── props.html.erb
│   │   │   │       ├── rules_do.html.erb
│   │   │   │       ├── rules_dont.html.erb
│   │   │   │       └── style.scss
│   │   │   ├── sage_object
│   │   │   │   ├── USAGE
│   │   │   │   ├── sage_object_generator.rb
│   │   │   │   └── templates
│   │   │   │       ├── markup.html.erb
│   │   │   │       ├── props.html.erb
│   │   │   │       ├── rules_do.html.erb
│   │   │   │       ├── rules_dont.html.erb
│   │   │   │       └── style.scss
│   │   │   ├── sage_page
│   │   │   │   ├── USAGE
│   │   │   │   ├── sage_page_generator.rb
│   │   │   │   └── templates
│   │   │   │       └── page.html.erb
│   │   │   ├── sage_token
│   │   │   │   ├── USAGE
│   │   │   │   ├── sage_token_generator.rb
│   │   │   │   └── templates
│   │   │   │       └── style.scss
│   │   │   └── sage_utility
│   │   │       ├── USAGE
│   │   │       ├── sage_utility_generator.rb
│   │   │       └── templates
│   │   │           ├── markup.html.erb
│   │   │           └── style.scss
│   │   ├── lib
│   │   │   ├── sage
│   │   │   │   ├── engine.rb
│   │   │   │   └── version.rb
│   │   │   └── sage.rb
│   │   ├── sage.gemspec
│   │   └── test
│   │       ├── dummy
│   │       │   ├── README.rdoc
│   │       │   ├── Rakefile
│   │       │   ├── app
│   │       │   │   ├── assets
│   │       │   │   │   ├── images
│   │       │   │   │   ├── javascripts
│   │       │   │   │   │   └── application.js
│   │       │   │   │   └── stylesheets
│   │       │   │   │       └── application.css
│   │       │   │   ├── controllers
│   │       │   │   │   ├── application_controller.rb
│   │       │   │   │   └── concerns
│   │       │   │   ├── helpers
│   │       │   │   │   └── application_helper.rb
│   │       │   │   ├── mailers
│   │       │   │   ├── models
│   │       │   │   │   └── concerns
│   │       │   │   └── views
│   │       │   │       └── layouts
│   │       │   │           └── application.html.erb
│   │       │   ├── bin
│   │       │   │   ├── bundle
│   │       │   │   ├── rails
│   │       │   │   ├── rake
│   │       │   │   └── setup
│   │       │   ├── config
│   │       │   │   ├── application.rb
│   │       │   │   ├── boot.rb
│   │       │   │   ├── database.yml
│   │       │   │   ├── environment.rb
│   │       │   │   ├── environments
│   │       │   │   │   ├── development.rb
│   │       │   │   │   ├── production.rb
│   │       │   │   │   └── test.rb
│   │       │   │   ├── initializers
│   │       │   │   │   ├── assets.rb
│   │       │   │   │   ├── backtrace_silencers.rb
│   │       │   │   │   ├── cookies_serializer.rb
│   │       │   │   │   ├── filter_parameter_logging.rb
│   │       │   │   │   ├── inflections.rb
│   │       │   │   │   ├── mime_types.rb
│   │       │   │   │   ├── session_store.rb
│   │       │   │   │   ├── to_time_preserves_timezone.rb
│   │       │   │   │   └── wrap_parameters.rb
│   │       │   │   ├── locales
│   │       │   │   │   └── en.yml
│   │       │   │   ├── routes.rb
│   │       │   │   └── secrets.yml
│   │       │   ├── config.ru
│   │       │   ├── lib
│   │       │   │   └── assets
│   │       │   ├── log
│   │       │   └── public
│   │       │       ├── 404.html
│   │       │       ├── 422.html
│   │       │       ├── 500.html
│   │       │       └── favicon.ico
│   │       ├── integration
│   │       │   └── navigation_test.rb
│   │       ├── lib
│   │       │   └── generators
│   │       │       └── sage
│   │       │           ├── sage_component_generator_test.rb
│   │       │           ├── sage_element_generator_test.rb
│   │       │           ├── sage_module_generator_test.rb
│   │       │           ├── sage_page_generator_test.rb
│   │       │           ├── sage_token_generator_test.rb
│   │       │           └── sage_utility_generator_test.rb
│   │       ├── sage_test.rb
│   │       └── test_helper.rb
│   └── sage-frontend
│       ├── fonts
│       │   ├── inter
│       │   │   ├── Inter-Black.woff
│       │   │   ├── Inter-Black.woff2
│       │   │   ├── Inter-BlackItalic.woff
│       │   │   ├── Inter-BlackItalic.woff2
│       │   │   ├── Inter-Bold.woff
│       │   │   ├── Inter-Bold.woff2
│       │   │   ├── Inter-BoldItalic.woff
│       │   │   ├── Inter-BoldItalic.woff2
│       │   │   ├── Inter-ExtraBold.woff
│       │   │   ├── Inter-ExtraBold.woff2
│       │   │   ├── Inter-ExtraBoldItalic.woff
│       │   │   ├── Inter-ExtraBoldItalic.woff2
│       │   │   ├── Inter-ExtraLight.woff
│       │   │   ├── Inter-ExtraLight.woff2
│       │   │   ├── Inter-ExtraLightItalic.woff
│       │   │   ├── Inter-ExtraLightItalic.woff2
│       │   │   ├── Inter-Italic.woff
│       │   │   ├── Inter-Italic.woff2
│       │   │   ├── Inter-Light.woff
│       │   │   ├── Inter-Light.woff2
│       │   │   ├── Inter-LightItalic.woff
│       │   │   ├── Inter-LightItalic.woff2
│       │   │   ├── Inter-Medium.woff
│       │   │   ├── Inter-Medium.woff2
│       │   │   ├── Inter-MediumItalic.woff
│       │   │   ├── Inter-MediumItalic.woff2
│       │   │   ├── Inter-Regular.woff
│       │   │   ├── Inter-Regular.woff2
│       │   │   ├── Inter-SemiBold.woff
│       │   │   ├── Inter-SemiBold.woff2
│       │   │   ├── Inter-SemiBoldItalic.woff
│       │   │   ├── Inter-SemiBoldItalic.woff2
│       │   │   ├── Inter-Thin.woff
│       │   │   ├── Inter-Thin.woff2
│       │   │   ├── Inter-ThinItalic.woff
│       │   │   ├── Inter-ThinItalic.woff2
│       │   │   ├── Inter-italic.var.woff2
│       │   │   ├── Inter-roman.var.woff2
│       │   │   └── Inter.var.woff2
│       │   └── sage
│       │       ├── Sage.eot
│       │       ├── Sage.svg
│       │       ├── Sage.ttf
│       │       ├── Sage.woff
│       │       └── Sage.woff2
│       ├── images
│       │   ├── docs
│       │   │   ├── apple-touch-icon.png
│       │   │   ├── avatar
│       │   │   │   ├── alex.png
│       │   │   │   ├── chanel.png
│       │   │   │   ├── cj.png
│       │   │   │   ├── court.png
│       │   │   │   ├── forrest.png
│       │   │   │   ├── isabelle.png
│       │   │   │   ├── jay.png
│       │   │   │   ├── jj.png
│       │   │   │   ├── lienha.png
│       │   │   │   ├── phil.png
│       │   │   │   └── sean.png
│       │   │   ├── billboard
│       │   │   │   ├── background_1.jpg
│       │   │   │   ├── background_2.jpg
│       │   │   │   ├── background_3.jpg
│       │   │   │   └── background_4.jpg
│       │   │   ├── card
│       │   │   │   ├── card-placeholder-lg.png
│       │   │   │   └── card-placeholder-sm.png
│       │   │   ├── favicon-16x16.png
│       │   │   ├── favicon-32x32.png
│       │   │   ├── favicon.ico
│       │   │   ├── sage.svg
│       │   │   ├── sage_icon.svg
│       │   │   ├── sage_illustration.png
│       │   │   └── sage_structure.png
│       │   └── system
│       │       ├── active-microphone.svg
│       │       ├── loader.svg
│       │       └── spinner.svg
│       ├── javascript
│       │   ├── define.js
│       │   ├── docs
│       │   │   └── index.js
│       │   └── system
│       │       └── index.js
│       ├── packs
│       │   ├── docs.js
│       │   └── system.js
│       └── stylesheets
│           ├── docs
│           │   ├── _button.scss
│           │   ├── _code.scss
│           │   ├── _colors.scss
│           │   ├── _example.scss
│           │   ├── _grid.scss
│           │   ├── _icon.scss
│           │   ├── _quick_links.scss
│           │   ├── _sidebar.scss
│           │   ├── _snippet.scss
│           │   ├── _specs.scss
│           │   ├── _status_key.scss
│           │   ├── _status_table.scss
│           │   ├── _table.scss
│           │   ├── _text.scss
│           │   ├── _theme.scss
│           │   ├── _token.scss
│           │   ├── _variables.scss
│           │   └── index.scss
│           └── system
│               ├── core
│               │   ├── _animations.scss
│               │   ├── _fonts.scss
│               │   ├── _functions.scss
│               │   ├── _icons.scss
│               │   ├── _mixins.scss
│               │   ├── _typography.scss
│               │   └── _variables.scss
│               ├── index.scss
│               ├── layout
│               │   ├── _container.scss
│               │   ├── _content.scss
│               │   ├── _document.scss
│               │   ├── _grid.scss
│               │   ├── _header.scss
│               │   ├── _page.scss
│               │   └── _stage.scss
│               ├── patterns
│               │   ├── elements
│               │   │   ├── _button.scss
│               │   │   ├── _checkbox.scss
│               │   │   ├── _description.scss
│               │   │   ├── _form_input.scss
│               │   │   ├── _form_select.scss
│               │   │   ├── _form_textarea.scss
│               │   │   ├── _label.scss
│               │   │   ├── _live_stream_wrapper.scss
│               │   │   ├── _loader.scss
│               │   │   ├── _menu_button.scss
│               │   │   ├── _meter.scss
│               │   │   ├── _overlay.scss
│               │   │   ├── _radio.scss
│               │   │   ├── _switch.scss
│               │   │   ├── _table.scss
│               │   │   └── _tooltip.scss
│               │   └── objects
│               │       ├── _alert.scss
│               │       ├── _assistant.scss
│               │       ├── _banner.scss
│               │       ├── _billboard.scss
│               │       ├── _card.scss
│               │       ├── _form_section.scss
│               │       ├── _input_group.scss
│               │       ├── _input_helper.scss
│               │       ├── _live_active_mic.scss
│               │       ├── _live_avatar.scss
│               │       ├── _live_option_menu.scss
│               │       ├── _live_profile_card.scss
│               │       ├── _live_stream_control.scss
│               │       ├── _live_stream_footer.scss
│               │       ├── _live_stream_header.scss
│               │       ├── _live_stream_video_grid.scss
│               │       ├── _live_user_control.scss
│               │       ├── _nav.scss
│               │       ├── _page_heading.scss
│               │       ├── _pagination.scss
│               │       ├── _panel.scss
│               │       ├── _sidebar.scss
│               │       └── _tabs.scss
│               ├── tokens
│               │   ├── _border.scss
│               │   ├── _breakpoints.scss
│               │   ├── _color_palette.scss
│               │   ├── _container.scss
│               │   ├── _font_size.scss
│               │   ├── _font_weight.scss
│               │   ├── _icon.scss
│               │   ├── _letter_spacing.scss
│               │   ├── _line_height.scss
│               │   ├── _shadow.scss
│               │   ├── _sidebar.scss
│               │   ├── _spacing.scss
│               │   └── _z_index.scss
│               ├── utilities
│               │   ├── _hidden.scss
│               │   └── _media.scss
│               └── vendor
│                   └── _reboot.scss
├── log
│   └── development.log
├── package.json
├── postcss.config.js
├── public
│   ├── 404.html
│   ├── 422.html
│   ├── 500.html
│   ├── favicon.ico
│   └── robots.txt
├── test
│   ├── controllers
│   │   └── pages_controller_test.rb
│   ├── fixtures
│   ├── helpers
│   ├── integration
│   ├── mailers
│   ├── models
│   └── test_helper.rb
└── yarn.lock
```
