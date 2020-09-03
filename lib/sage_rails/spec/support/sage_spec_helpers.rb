module SageSpecHelpers

  def sage_modal_within(name: nil, title: nil)
    selector = name ? "[data-js-modal='#{name}']" : "[data-js-modal]"

    page.execute_script("$('#{selector}').addClass('sage-modal--active')")

    within selector do
      yield
      have_content(title) if title
    end
  end

  def sage_tabs_within(name:, active: nil, scope: "body")
    selector = active ? ".sage-tabs-pane--active[data-js-tabs-pane='#{name}']" : "[data-js-tabs-pane='#{name}']"

    within "#{scope} #{selector}" do
      yield
    end
  end

  def sage_tabs_select(text, scope: "body")
    find("#{scope} button[data-js-tabs-target]", text: text).click
  end

  def sage_dropdown_select(id:,option:)
    find("[data-js-dropdown='#{id}'] > *:not(.sage-dropdown__container)").click

    within "[data-js-dropdown='#{id}']" do
      find("a", text: option).click
    end
  end

  def sage_sortable_item_within(text)
    sortable_item = find(".sage-sortable__item", text: text)

    within sortable_item do
      yield
    end
  end

end
