class SageCatalogCard < SageComponent
  attr_accessor :image
  attr_accessor :href
  attr_accessor :title

  def sections
    %w(actions info)
  end
end
