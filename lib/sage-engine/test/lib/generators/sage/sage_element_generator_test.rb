require 'test_helper'
require 'generators/sage_element/sage_element_generator'

module Sage
  class SageElementGeneratorTest < Rails::Generators::TestCase
    tests SageElementGenerator
    destination Rails.root.join('tmp/generators')
    setup :prepare_destination

    # test "generator runs without errors" do
    #   assert_nothing_raised do
    #     run_generator ["arguments"]
    #   end
    # end
  end
end
