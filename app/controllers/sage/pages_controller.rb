require_dependency "sage/application_controller"

module Sage
  class PagesController < ApplicationController
    layout "sage/breakout", :only => [ :breakout ]
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
      @description = params[:description]
    end

    def objects
    end

    def object
      @title = params[:title]
    end 

    def utilities
    end

    # Generator Pages
    def item
      @type = params[:type]
      @title = params[:title]
      @description = params[:description]
    end

    def breakout
      @type = params[:type]
      @title = params[:title]
      @description = params[:description]
    end

  end
end
