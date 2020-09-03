# require_relative "lib/railtie" if defined? ::Rails::Railtie
# require_relative "lib/version"
# require_relative "lib/view_helpers"
# require_relative "lib/sage_component"

Dir[File.dirname(__FILE__) + '/lib/sage_components/*.rb'].each {|file| require file }

# require 'sage_rails/railtie' if defined?(Rails::Railtie)


module SageRails
  # class Config
  #   attr_accessor :key
  # end

  # def self.config
  #   @@config ||= Config.new
  # end

  # def self.configure
  #   yield self.config

  #   if defined? ::Airbrake
  #     class << ::Airbrake
  #       include LogWeasel::Airbrake;
  #     end
  #   end

  #   if defined? Resque
  #     LogWeasel::Resque.initialize!
  #   end

  # end
end
