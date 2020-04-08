//= require sage/system/define
//= require sage/system/util

//= require sage/system/tooltip
//= require sage/system/sidebar
//= require sage/system/overlay


// Conditional routing
// NOTE: modules must be imported above to be initialized below
(function() {
  // Tooltips
  if (document.querySelector('[data-tooltip]') !== null) {
    Sage.tooltip();
  }

  // Sidebar
  if (document.querySelector('.sage-sidebar') !== null) {
    Sage.sidebar.init();
  }

  // Overlay
  if (document.querySelector('.sage-overlay') !== null) {
    Sage.overlay.init();
  }


})();


