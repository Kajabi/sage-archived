# Sage

The Sage Design System (SDS) is our single source of truth, providing everything you need to build great products for our customers. It is the culmination of designers and developers working together to give teams the ability to ship high-quality products faster.

## Getting Started

Start Guard for live reloading

```console
$ guard
```

Navigate to the dummy app found inside the gem

```console
$ cd test/dummmy
```

In a new terminal Start Up Rails Sever

```console
$ rails s
```

You are then able to navigate to all the guides associated with the system by following the link: 
http://localhost:3000/sage/pages/index

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
