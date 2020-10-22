class SagePanelControls < SageComponent
  attr_accessor :show_expand_contract
  attr_accessor :show_mini_pagination
  attr_accessor :show_bulk_actions
  attr_accessor :show_sort

  def sections
    %w(panel_controls_toolbar panel_controls_tabs)
  end
end
