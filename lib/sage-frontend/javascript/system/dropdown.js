Sage.dropdown = (function() {
  // ==================================================
  // Variables
  // ==================================================

  // The class to toggle on the menu when values are selected in selection mode
  const ddValueSelectedClass = 'sage-dropdown--value-selected';

  // Several variations exist for triggers in selection mode; this is a grouped selector to grab any of them
  const triggerSelectClasses = '.sage-dropdown__trigger--select-labeled, .sage-dropdown__trigger--select';

  // The element in which to show the selected value when dropdown is in selection mode
  const triggerSelectedValueClass = '.sage-dropdown__trigger-selected-value';

  // In order to reset the label in seleciton mode, provide a standard prefix for the reset trigger item
  const resetTriggerPrefix = '--';

  // The selected value needs some content in order to have height
  const defaultSelectedValue = '&nbsp;';

  // Selector for a menu item
  const ddItemClass = 'sage-dropdown__item-control';

  // Selector for seach item in menu
  const ddSearchItemClass = 'sage-search__input';

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    buildA11y(el);
    el.addEventListener('click', handleClick);
    el.addEventListener('keyup', handleKeyAction);
  }

  function unbind(el) {
    el.removeEventListener('click', handleClick);
    el.removeEventListener('keyup', handleKeyAction);
  }

  function handleClick(evt) {
    const ddEl = evt.currentTarget;
    const el = evt.target;

    // Stop if the element issuing the event is a search field
    if (el.classList.contains(ddSearchItemClass)) {
      return;
    }

    // If the dropdown is in select mode, display the selected content
    const ddTrigger = ddEl.querySelector(triggerSelectClasses);
    const eventIsOnDDItem = el.classList.contains(ddItemClass);
    if (eventIsOnDDItem && ddTrigger) {
      const val = (el.value || el.textContent).trim();
      updateTriggerLabel(val, ddTrigger);
      updateStateClass(val, ddEl);
    }

    isExpanded(ddEl) ? close(ddEl) : open(ddEl);
  }

  function updateStateClass(val, ddEl) {
    const hasSelectValueClass = ddEl.classList.contains(ddValueSelectedClass);
    if (val.startsWith(resetTriggerPrefix)) {
      if (hasSelectValueClass) {
        ddEl.classList.remove(ddValueSelectedClass)
      }
    } else {
      if (!hasSelectValueClass) {
        ddEl.classList.add(ddValueSelectedClass)
      }
    }
  }

  function updateTriggerLabel(val, ddTriggerEl) {
    const triggerSelectedValue = ddTriggerEl.querySelector(triggerSelectedValueClass);
    
    if (!triggerSelectedValue) {
      return;
    }

    if (val.startsWith(resetTriggerPrefix)) {
      triggerSelectedValue.innerHTML = defaultSelectedValue;  
    } else {
      triggerSelectedValue.innerHTML = val;
    }
  }

  function handleKeyAction(evt) {
    let el = evt.currentTarget;

    if (evt.keyCode === 13 && !isExpanded(el)) {
      open(el);
    } else if (evt.keyCode === 27) {
      close(el);
    }
  }

  function open(el) {
    el.setAttribute('aria-expanded', 'true');
  }

  function close(el) {
    el.setAttribute('aria-expanded', 'false');
  }

  function isExpanded(el) {
    return el.getAttribute('aria-expanded') === 'true';
  }

  function buildA11y(el) {
    el.setAttribute('aria-haspopup', true);
    el.setAttribute('aria-expanded', false);
  }

  return {
    init: init,
    unbind: unbind,
  }

})();
