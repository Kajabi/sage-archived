require 'test_helper'
require 'generators/sage_utility/sage_utility_generator'

module Sage
  class SageUtilityGeneratorTest < Rails::Generators::TestCase
    tests SageUtilityGenerator
    destination Rails.root.join('tmp/generators')
    setup :prepare_destination

    # test "generator runs without errors" do
    #   assert_nothing_raised do
    #     run_generator ["arguments"]
    #   end
    # end
  end
end
