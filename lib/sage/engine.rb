require "sass-rails"
require "autoprefixer-rails"
require "inline_svg"

module Sage
  class Engine < ::Rails::Engine
    isolate_namespace Sage
  end
end
