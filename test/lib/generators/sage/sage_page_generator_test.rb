require 'test_helper'
require 'generators/sage_page/sage_page_generator'

module Sage
  class SagePageGeneratorTest < Rails::Generators::TestCase
    tests SagePageGenerator
    destination Rails.root.join('tmp/generators')
    setup :prepare_destination

    # test "generator runs without errors" do
    #   assert_nothing_raised do
    #     run_generator ["arguments"]
    #   end
    # end
  end
end
