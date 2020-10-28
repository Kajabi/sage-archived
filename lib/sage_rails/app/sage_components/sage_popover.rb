class SagePopover < SageComponent
	attr_accessor :id
	attr_accessor :help_title
	attr_accessor :help_content
  attr_accessor :help_content_link
	attr_accessor :help_content_link_text
	
	def sections
    %w(help_content)
  end
end
  
