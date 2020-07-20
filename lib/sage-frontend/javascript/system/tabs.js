Sage.tabs = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_TAB_ITEM = 'data-js-tabs-target';
  const SELECTOR_TAB_PANE = 'data-js-tabs-pane';
  const CLASS_TAB_ACTIVE = 'sage-tabs__tab--active';
  const CLASS_TAB_PANE_ACTIVE = 'sage-tabs-pane--active';


  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.addEventListener('click', tabClickHandler);

    // Select the first tab on init
    el.querySelector(`[${SELECTOR_TAB_ITEM}]`).click();
  }

  function unbind(el) {
    el.removeEventListener('click', tabClickHandler);
  }

  function tabClickHandler(evt) {
    let elTabsParent = this;
    let elTab = evt.target;
    let tabsArray = Sage.util.nodelistToArray( elTabsParent.querySelectorAll(`[${SELECTOR_TAB_ITEM}]`) );

    tabsArray.forEach((el) => el.classList.remove(CLASS_TAB_ACTIVE));
    elTab.classList.add(CLASS_TAB_ACTIVE);

    let paneTarget = elTab.getAttribute(SELECTOR_TAB_ITEM);
    let elPane = document.querySelector(`[${SELECTOR_TAB_PANE}=${paneTarget}]`);
    let panesArray = Sage.util.nodelistToArray( elPane.parentElement.querySelectorAll(`[${SELECTOR_TAB_PANE}]`) );

    panesArray.forEach((el) => el.classList.remove(CLASS_TAB_PANE_ACTIVE));
    elPane.classList.add(CLASS_TAB_PANE_ACTIVE);
  }

  return {
    init: init,
    unbind: unbind
  }

})();
