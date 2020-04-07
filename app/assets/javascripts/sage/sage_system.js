//= require sage/system/define
//= require sage/system/util

//= require sage/system/tooltip
//= require sage/system/sidebar


// Conditional routing
(function() {
  // Tooltips
  if (document.querySelector('[data-tooltip]') !== null) {
    Sage.tooltip();
  }

  // Sidebar
  if (document.querySelector('.sage-sidebar') !== null) {
    Sage.sidebar.bindEvents();
  }


})();


