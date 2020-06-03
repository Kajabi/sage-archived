$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "sage/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "sage"
  s.version     = Sage::VERSION
  s.authors     = ["cmcfadzean"]
  s.email       = ["court@kajabi.com"]
  s.homepage    = "https://github.com/Kajabi/sage_design_system"
  s.summary     = "temp"
  s.description = "temp"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2.11.1"

  s.add_development_dependency "sqlite3", "~> 1.3.0"
  s.add_development_dependency "pry"
end
