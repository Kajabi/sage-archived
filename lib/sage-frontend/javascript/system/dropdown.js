Sage.dropdown = (function() {
  // ==================================================
  // Variables
  // ==================================================
  var dropdowns = document.querySelectorAll('[data-js-dropdown]');


  // ==================================================
  // Functions
  // ==================================================

  function init() {
    dropdowns.forEach(function(el) {
      buildA11y(el);

      el.addEventListener('click', function(evt) {
        var target = evt.currentTarget;
        if (!target) return;
        var isExpanded = target.getAttribute('aria-expanded') == 'true';
        target.setAttribute('aria-expanded', !isExpanded);
      });
    });
  }

  function buildA11y(el) {
    el.setAttribute('aria-has-popup', true);
    el.setAttribute('aria-expanded', false);
    el.setAttribute('tabindex', 0);
    el.setAttribute('role', 'button');
  }

  return {
    init: init
  }

})();
