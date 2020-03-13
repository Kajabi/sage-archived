class ViewComponent
  include ActiveModel::Model
  attr_accessor :context

  def render
    context.render(
      partial: "components/#{template_path}",
      locals: { component: self }
    )
  end

  private
  def template_path
    self.class.to_s.underscore
  end
end