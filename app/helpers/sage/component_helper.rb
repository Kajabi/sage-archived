module Sage
  module ComponentHelper
    def sage_component(component, props)
      component.new({ context: self }.merge(props)).render
    end
  end 
end