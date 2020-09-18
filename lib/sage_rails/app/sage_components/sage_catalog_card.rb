class SageCatalogCard < SageComponent
  attr_accessor :image
  attr_accessor :href

  def sections
    %w(actions info)
  end
end
