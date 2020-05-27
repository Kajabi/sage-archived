//= require sage/system/define
//
window.SageDocs = window.SageDocs || {};
//= require_tree .


// SAGE DOCUMENTATION USE ONLY

// Conditional routing
// NOTE: modules must be imported above to be initialized below
if (document.querySelector('.sage-docs') !== null) {

  if (document.querySelector('.sage-live-option-menu-anchor') !== null) {
    SageDocs.liveOptionMenu.init();
  }

  if (document.querySelector('.sage-banner--active') !== null && document.querySelector('.example__preview--page') !== null) {
    SageDocs.banner.init();
  }
}
