Sage.init = function(elementNamesToInit) {
  var shouldInit = function(elementName, selector) {
    return elementNamesToInit.includes(elementName) && document.querySelector(selector) !== null;
  };

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
  if ( shouldInit('modal', '.sage-modal') ) {
    Sage.modal.init();
  // Initialize Menu
  if ( shouldInit('dropdown', '[data-js-dropdown]') ) {
    Sage.dropdown.init();
  }

  // Initialize Banner
  if ( shouldInit('banner', '.sage-banner--active') && !document.querySelector('.sage-docs') ) {
    Sage.banner.init();
  }

}
