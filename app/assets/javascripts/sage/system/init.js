Sage.init = function(elementNamesToInit) {
  var shouldInit = function(elementName, selector) {
    return elementNamesToInit.includes(elementName) && document.querySelector(selector) !== null;
  };

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

  // Initialize Overlay
  if ( shouldInit('dropdown', '[data-js-sagedropdown]') ) {
    document.querySelectorAll('[data-js-sagedropdown]').forEach(function(el) {
      new Sage.Dropdown(el);
    });
  }
}
