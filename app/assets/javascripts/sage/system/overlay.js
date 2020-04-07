Sage.overlay = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var sageBody = document.querySelector('.sage-docs').classList;
  var sageNavOverlay = document.querySelector('.sage-overlay');


  // ==================================================
  // Functions
  // ==================================================

  function toggleOverlay(overlayClass) {
    var bodyClassName = overlayClass ? overlayClass : 'overlay-is-open';
    return sageBody.contains(bodyClassName) ? sageBody.remove(bodyClassName) : sageBody.add(bodyClassName);
  }


  function init() {

    // Close overlay and menu on click
    sageNavOverlay.addEventListener('click', function(e) {
      if (document.querySelector('.sage-sidebar.is-open') !== null) {
        Sage.sidebar.resetSideNav();
      } else if (document.querySelector('.overlay-is-open') !== null) {
        toggleOverlay();
      }
    });

  }





  return {
    init: init,
    toggleOverlay: toggleOverlay
  };

})();
