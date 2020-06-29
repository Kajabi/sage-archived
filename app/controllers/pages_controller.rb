class PagesController < ApplicationController
  layout "breakout", :only => [ :breakout ]

  def index
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

  def element
    @title = params[:title]
    @description = params[:description]
  end

  def elements
  end

  def objects
  end

  def object
    @title = params[:title]
    @description = params[:description]
  end

  def utilities
  end

  # Generator Pages
  def status
  end

  def breakout
    @type = params[:type]
    @title = params[:title]
    @description = params[:description]
  end
end
