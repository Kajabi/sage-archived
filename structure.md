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
│       │   │   ├── checkbox
│       │   │   ├── danger_button
│       │   │   ├── description
│       │   │   ├── form_input
│       │   │   ├── form_select
│       │   │   ├── form_textarea
│       │   │   ├── label
│       │   │   ├── link_button
│       │   │   ├── live_stream_wrapper
│       │   │   ├── loader
│       │   │   ├── radio
│       │   │   ├── switch
│       │   │   ├── table
│       │   │   └── tooltip
│       │   ├── objects
│       │   │   ├── _object.html.erb
│       │   │   ├── _object_preview.html.erb
│       │   │   ├── alert
│       │   │   ├── assistant
│       │   │   ├── banner
│       │   │   ├── billboard
│       │   │   ├── card
│       │   │   ├── content
│       │   │   ├── form_section
│       │   │   ├── live_active_mic
│       │   │   ├── live_avatar
│       │   │   ├── live_option_menu
│       │   │   ├── live_profile_card
│       │   │   ├── live_stream_control
│       │   │   ├── live_stream_footer
│       │   │   ├── live_stream_header
│       │   │   ├── live_stream_video_grid
│       │   │   ├── live_user_control
│       │   │   ├── nav
│       │   │   ├── page
│       │   │   ├── page_heading
│       │   │   ├── pagination
│       │   │   ├── panel
│       │   │   ├── sidebar
│       │   │   └── tabs
│       │   ├── shared
│       │   │   ├── _heading.html.erb
│       │   │   ├── _props.html.erb
│       │   │   ├── _quick_links.html.erb
│       │   │   └── _rules.html.erb
│       │   └── utilities
│       │       ├── _utility.html.erb
│       │       └── media
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
│   │   │   ├── sage_object
│   │   │   │   ├── USAGE
│   │   │   │   ├── sage_object_generator.rb
│   │   │   │   └── templates
│   │   │   ├── sage_page
│   │   │   │   ├── USAGE
│   │   │   │   ├── sage_page_generator.rb
│   │   │   │   └── templates
│   │   │   ├── sage_token
│   │   │   │   ├── USAGE
│   │   │   │   ├── sage_token_generator.rb
│   │   │   │   └── templates
│   │   │   └── sage_utility
│   │   │       ├── USAGE
│   │   │       ├── sage_utility_generator.rb
│   │   │       └── templates
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
│   │       │   ├── bin
│   │       │   ├── config
│   │       │   ├── config.ru
│   │       │   ├── lib
│   │       │   ├── log
│   │       │   └── public
│   │       ├── integration
│   │       │   └── navigation_test.rb
│   │       ├── lib
│   │       │   └── generators
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
│       │   │   ├── billboard
│       │   │   ├── card
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
│               ├── index.scss
│               ├── layout
│               ├── patterns
│               ├── tokens
│               ├── utilities
│               └── vendor
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
