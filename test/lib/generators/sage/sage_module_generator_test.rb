require 'test_helper'
require 'generators/sage_module/sage_module_generator'

module Sage
  class SageModuleGeneratorTest < Rails::Generators::TestCase
    tests SageModuleGenerator
    destination Rails.root.join('tmp/generators')
    setup :prepare_destination

    # test "generator runs without errors" do
    #   assert_nothing_raised do
    #     run_generator ["arguments"]
    #   end
    # end
  end
end
