require 'test_helper'
require 'generators/sage_token/sage_token_generator'

module Sage
  class SageTokenGeneratorTest < Rails::Generators::TestCase
    tests SageTokenGenerator
    destination Rails.root.join('tmp/generators')
    setup :prepare_destination

    # test "generator runs without errors" do
    #   assert_nothing_raised do
    #     run_generator ["arguments"]
    #   end
    # end
  end
end
