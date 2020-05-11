//= require sage/system/define

//= require sage/docs/live-option-menu
//= require sage/docs/banner
//= require sage/docs/example


// SAGE DOCUMENTATION USE ONLY

// Conditional routing
// NOTE: modules must be imported above to be initialized below
if (document.querySelector('.sage-docs') !== null) {

  if (document.querySelector('.sage-live-option-menu-anchor') !== null) {
    Sage.docs.liveOptionMenu.init();
  }

  if (document.querySelector('.sage-banner--active') !== null && document.querySelector('.example__preview--page') !== null) {
    Sage.docs.banner.init();
  }

  if (document.querySelector('.example__code') !== null && document.querySelector('.example__expand-btn') !== null) {
    Sage.docs.example.init();
  }

}
