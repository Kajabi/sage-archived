require_relative "lib/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "sage"
  s.version     = SageRails::VERSION
  s.authors     = ["cmcfadzean"]
  s.email       = ["court@kajabi.com"]
  s.homepage    = "http://sage-design-system.kajabi.com"
  s.summary     = "temp"
  s.description = "temp"
  s.license     = "MIT"

  s.files = Dir["{lib}/**/*"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2.11.1"
end
