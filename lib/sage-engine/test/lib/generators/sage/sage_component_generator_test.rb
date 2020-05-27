require 'test_helper'
require 'generators/sage_component/sage_component_generator'

module Sage
  class SageComponentGeneratorTest < Rails::Generators::TestCase
    tests SageComponentGenerator
    destination Rails.root.join('tmp/generators')
    setup :prepare_destination

    # test "generator runs without errors" do
    #   assert_nothing_raised do
    #     run_generator ["arguments"]
    #   end
    # end
  end
end
