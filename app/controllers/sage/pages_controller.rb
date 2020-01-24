require_dependency "sage/application_controller"

module Sage
  class PagesController < ApplicationController
    layout "sage/minimal", :only => [ :component, :element ]
    def generators
    end

    def index
    end

    def start
    end

    def conventions
    end

    def accessibility
    end

    def browser
    end

    def language
    end

    def token
    end
    
    def color
    end

    def typography
    end

    def Grid
    end

    def container
    end

    def icon
    end

    def elements
    end

    def element
      @title = params[:title]
    end

    def components
    end

    def component
      @title = params[:title]
    end 

    def modules
    end

    def utilities
    end

  end
end
