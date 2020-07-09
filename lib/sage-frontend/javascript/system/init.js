Sage.init = function(elementNamesToInit) {
  let shouldInit = function(elementName, selector) {
    return elementNamesToInit.includes(elementName) && document.querySelector(selector) !== null;
  };

  let inDocumentationContext = function() {
    return !!document.querySelector('.sage-docs');
  }

  // Initialize Table
  if ( shouldInit('table', '.sage-table') ) {
    Sage.table.init();
  }

  // Initialize Tooltip
  if ( shouldInit('tooltip', '[data-js-tooltip]') ) {
    Sage.tooltip();
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

  // Initialize Modal
  if ( shouldInit('modal', '[data-js-modal-trigger]') ) {
    Sage.modal.init();
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
