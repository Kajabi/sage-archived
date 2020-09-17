class SagePanel < SageComponent
  attr_accessor :id
  attr_accessor :color
  attr_accessor :size
  attr_accessor :style
  attr_accessor :title
  attr_accessor :content_flush

  def sections
    %w(header_actions footer)
  end
end
