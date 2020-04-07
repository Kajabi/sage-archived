/**
  * docs.js
  *
  * Sage documentation app functions
  *
*/

if (document.querySelector('.sage-docs') !== null) {

  // Variables
  var sageBody = document.querySelector('.sage-docs').classList;
  var sageNavOverlay = document.querySelector('.sage-overlay');


  // Functions

  // toggle overlay display
  // TODO: move to global utils
  var toggleOverlay = function (overlayClass) {
    var bodyClassName = overlayClass ? overlayClass : 'overlay-is-open';
    return sageBody.contains(bodyClassName) ? sageBody.remove(bodyClassName) : sageBody.add(bodyClassName);
  };


  // Event handlers

  // Close overlay and menu on click
  sageNavOverlay.addEventListener('click', function(e) {
    Sage.sidebar.resetSideNav();
  });

  // Live option menu
  if (document.querySelector('.sage-live-option-menu-anchor') !== null) {
    var sageLiveOptionMenu = document.querySelector('.sage-live-option-menu-anchor');

    // Simulate contextual menu
    sageLiveOptionMenu.addEventListener('click', function(e) {
      var target = e.currentTarget;
      var isExpanded = target.getAttribute('aria-expanded') == 'true';
      target.setAttribute('aria-expanded', !isExpanded);
    });
  }

}
