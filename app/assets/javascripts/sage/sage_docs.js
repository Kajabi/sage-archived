//= require sage/system/define

//= require sage/docs/live-option-menu


// SAGE DOCUMENTATION USE ONLY

// Conditional routing
// NOTE: modules must be imported above to be initialized below
if (document.querySelector('.sage-docs') !== null) {

  if (document.querySelector('.sage-live-option-menu-anchor') !== null) {
    Sage.docs.liveOptionMenu.init();
  }


}
