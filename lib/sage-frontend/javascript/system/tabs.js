Sage.tabs = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_TABS = 'data-js-tabs';
  const SELECTOR_TAB_ITEM = 'data-js-tabs-target';
  const SELECTOR_TAB_PANE = 'data-js-pane';
  const CLASS_TAB_ACTIVE = 'sage-tab--active';
  const CLASS_TAB_PANE_ACTIVE = 'sage-tab__pane--active';
  const EVENT_SELECT = 'sage.tabs.change';


  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.addEventListener('click', tabClickHandler);

    let elTabInitialActive = el.querySelector(`.${CLASS_TAB_ACTIVE}`);
    if (elTabInitialActive) {
      // If a Tab has `.sage-tabs-pane--active` on init, click it to trigger the Pane change
      elTabInitialActive.click();
    } else {
      // If a tab isn't pre-selected on init, click the first one to make it active
      el.querySelector(`[${SELECTOR_TAB_ITEM}]`).click();
    }
  }

  function unbind(el) {
    el.removeEventListener('click', tabClickHandler);
  }

  function tabClickHandler(evt) {
    let target = evt.target.getAttribute(SELECTOR_TAB_ITEM);

    if (target) {
      dispatchChange(this.getAttribute(SELECTOR_TABS), evt.target.getAttribute(SELECTOR_TAB_ITEM));
    }
  }

  function eventHandlerChange(evt) {
    let { tabsId, paneId } = evt.detail;

    let elTabsParent = document.querySelector(`[${SELECTOR_TABS}="${tabsId}"]`);
    let elTab = elTabsParent.querySelector(`[${SELECTOR_TAB_ITEM}="${paneId}"]`);
    let tabsArray = Sage.util.nodelistToArray( elTabsParent.querySelectorAll(`[${SELECTOR_TAB_ITEM}]`) );

    tabsArray.forEach((el) => el.classList.remove(CLASS_TAB_ACTIVE));
    elTab.classList.add(CLASS_TAB_ACTIVE);

    let elPane = document.querySelector(`[${SELECTOR_TAB_PANE}="${paneId}"]`);
    let panesArray = Sage.util.nodelistToArray( elPane.parentElement.querySelectorAll(`[${SELECTOR_TAB_PANE}]`) );

    panesArray.forEach((el) => el.classList.remove(CLASS_TAB_PANE_ACTIVE));
    elPane.classList.add(CLASS_TAB_PANE_ACTIVE);
  }

  function dispatchChange(tabsId, paneId) {
    let eventDetail = { tabsId: tabsId, paneId: paneId };
    document.dispatchEvent(new CustomEvent(EVENT_SELECT, { detail: eventDetail }));
  }

  return {
    init: init,
    unbind: unbind,
    eventHandlerChange: eventHandlerChange
  }

})();
