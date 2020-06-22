Sage.menu = (function() {
  // ==================================================
  // Variables
  // ==================================================
  var sageMenu = document.querySelectorAll('.sage-menu-anchor');


  // ==================================================
  // Functions
  // ==================================================

  function init() {
    console.log('saldkjl')

    // Simulate contextual menu
    sageMenu.forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var target = e.currentTarget;
        if (!target) return;
        var isExpanded = target.getAttribute('aria-expanded') == 'true';
        target.setAttribute('aria-expanded', !isExpanded);
      });
    });
  }


  return {
    init: init
  }

})();
