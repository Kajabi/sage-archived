Sage.docs.liveOptionMenu = (function() {
  // ==================================================
  // Variables
  // ==================================================
  var sageLiveOptionMenu = document.querySelector('.sage-live-option-menu-anchor');


  // ==================================================
  // Functions
  // ==================================================

  function init() {

    // Simulate contextual menu
    sageLiveOptionMenu.addEventListener('click', function(e) {
      var target = e.currentTarget;
      var isExpanded = target.getAttribute('aria-expanded') == 'true';
      target.setAttribute('aria-expanded', !isExpanded);
    });
  }


  return {
    init: init
  }

})();
