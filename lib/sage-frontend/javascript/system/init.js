import * as arrive from 'arrive/src/arrive.js';

Sage.init = function(elementNamesToInitLegacy) {
  let initDocumentPresenceListener = function(elParentSelector, initFunc, destroyFunc) {
    // Arrive.js: https://github.com/uzairfarooq/arrive
    const ARRIVE_SETTINGS = {
      fireOnAttributesModification: false,
      existing: true,
      onceOnly: false
    }

    document.arrive(elParentSelector, ARRIVE_SETTINGS, function() {
      initFunc(this);
    });

    if (destroyFunc) {
      document.leave(elParentSelector, ARRIVE_SETTINGS, function() {
        destroyFunc(this);
      });
    }
  }

  let initDocumentEventListener = function(eventName, handlerFunc) {
    document.addEventListener(eventName, handlerFunc);
  }

  initDocumentPresenceListener('[data-js-modal]',           Sage.modal.init,            false);
  initDocumentPresenceListener('[data-js-modaltrigger]',    Sage.modal.initTrigger,     false);
  initDocumentPresenceListener('[data-js-tooltip]',         Sage.tooltip.init,          Sage.tooltip.destroy);

  initDocumentEventListener('sage.modal.closeAll',          Sage.modal.eventHandlerCloseAll);


  // ---------- LEGACY INIT STRATEGY ----------

  let shouldInit = function(elementName, selector) {
    return elementNamesToInitLegacy.includes(elementName) && document.querySelector(selector) !== null;
  };

  let inDocumentationContext = function() {
    return !!document.querySelector('.sage-docs');
  }

  // Initialize Table
  if ( shouldInit('table', '.sage-table') ) {
    Sage.table.init();
  }

  // Initialize Sidebar
  if ( shouldInit('sidebar', '.sage-sidebar') ) {
    Sage.sidebar.init();
  }

  // Initialize Overlay
  if ( shouldInit('overlay', '.sage-overlay') ) {
    Sage.overlay.init();
  }

  // Initialize Alert
  if ( shouldInit('alert', '.sage-alert') ) {
    Sage.alert.init();
  }

  // Initialize Select
    if ( shouldInit('select', '.sage-select') ) {
    Sage.select.init();
  }

  // Initialize Input appendices
  if ( shouldInit('inputaffixes', '.sage-input--affixed') ) {
    Sage.inputaffixes.init();
  }

  // Initialize Input groups
  if ( shouldInit('inputgroup', '.sage-input-group') ) {
    Sage.inputgroup.init();
  }

  // Initialize Input groups
  if ( shouldInit('inputhelper', '.sage-input-helper') ) {
    Sage.inputhelper.init();
  }

  // Initialize Meter
  if ( shouldInit('meter', '.sage-meter') ) {
    Sage.meter.init();
  }

  // Initialize Dropdown
  if ( shouldInit('dropdown', '[data-js-dropdown]') ) {
    Sage.dropdown.init();
  }

  // Initialize Sortable
  if ( shouldInit('sortable', '[data-js-sortable]') ) {
    Sage.sortable.init();
  }

  // Initialize Banner
  if ( shouldInit('banner', '.sage-banner--active') && !inDocumentationContext() ) {
    Sage.banner.init();
  }

}
