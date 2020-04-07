Sage.sidebar = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var sageToggleBtn = document.querySelector('[data-js-btn-target]');


  // ==================================================
  // Functions
  // ==================================================

  // open or close sidenav
  function toggleSidebar(ele, evt) {
    var buttonTarget = document.getElementById(Sage.util.getBtnTarget(evt));

    buttonTarget.classList.toggle('is-open');

    if (buttonTarget.classList.contains('is-open')) {
      ele.setAttribute('aria-expanded', true);
    } else {
      ele.setAttribute('aria-expanded', false);
    }

    toggleOverlay();
  }


  // reset sidenav state to closed/default
  function resetSideNav() {
    var openSidebar = document.querySelector('.sage-sidebar');

    openSidebar.classList.remove('is-open');
    sageToggleBtn.setAttribute('aria-expanded', false);
    toggleOverlay();
  }


  // ==================================================
  // Event handlers
  // ==================================================

  function init() {

    // Toggle sidebar on menu button click
    sageToggleBtn.addEventListener('click', function(e) {
      toggleSidebar(this, e);
    });

    // Close overlay and menu on esc keypress
    document.addEventListener('keyup', function(e) {
      var keyNum = 'which' in e ? e.which : e.keyCode;

      if (keyNum === 27 && document.querySelector('.sage-sidebar.is-open') !== null) {  // esc key
        resetSideNav();
      }
    });
  }


  return {
    init: init,
    resetSideNav: resetSideNav
  };

})();
