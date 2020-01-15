# Sage

The Sage Design System (SDS) is our single source of truth, providing everything you need to build great products for our customers. It is the culmination of designers and developers working together to give teams the ability to ship high-quality products faster.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'sage', git: 'https://github.com/Kajabi/sage.git'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install sage_design_system

## Usage

Mount Sage routes into your routes file:

```ruby
mount Sage::Engine => "/sage"
```

Import Sage styles in app/assets/stylesheets/application.scss:

```scss
@import "sage";
```

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
