class SageComponent
  include ActiveModel::Model
  attr_accessor :context
  attr_accessor :content

  def render
    context.render(
      partial: "sage_components/#{template_path}",
      locals: { component: self }
    ).tap { cleanup_section_vars }
  end

  private

  def sections
    []
  end

  def cleanup_section_vars
    sections.each do |section_name|
      context.view_flow.set("sage_#{section_name}".to_sym, '')
    end
  end

  def template_path
    self.class.to_s.underscore
  end
end
