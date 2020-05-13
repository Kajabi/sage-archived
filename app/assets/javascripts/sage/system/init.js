Sage.init = function(elementNamesToInit) {
  var shouldInit = function(elementName, selector) {
    return elementNamesToInit.includes(elementName) && document.querySelector(selector) !== null;
  };

  // Initialize Table
  if ( shouldInit('table', '.sage-table') ) {
    Sage.table.init();
  }

  // Initialize Tooltip
  if ( shouldInit('tooltip', '[data-tooltip]') ) {
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

   // Initialize Alert
   if ( shouldInit('select', '.sage-select') ) {
    Sage.select.init();
  }

   // Initialize Banner
   if ( shouldInit('banner', '.sage-banner--active') && !document.querySelector('.sage-docs') ) {
    Sage.banner.init();
  }

}
