/**
  * docs.js
  *
  * Sage documentation app functions
  *
*/

if (document.querySelector('.sage-docs') !== null) {

  // Variables
  var sageBody = document.querySelector('.sage-docs').classList;
  var sageToggleBtn = document.querySelector('[data-js="sage-sidebar-menu"]');
  var sageNavOverlay = document.querySelector('.sage-overlay');


  // Functions

  // toggle overlay display
  // TODO: move to global utils
  var toggleOverlay = function (overlayClass) {
    var bodyClassName = overlayClass ? overlayClass : 'overlay-is-open';
    return sageBody.contains(bodyClassName) ? sageBody.remove(bodyClassName) : sageBody.add(bodyClassName);
  };

  // retrieve button target id
  var getBtnTarget = function(e) {
    return e.target.getAttribute('aria-controls') ? e.target.getAttribute('aria-controls') : e.target.getAttribute('data-js');
  };

  // reset sidenav state to closed/default
  var resetSideNav = function() {
    var openSidebar = document.querySelector('.sage-sidebar');

    openSidebar.classList.remove('is-open');
    sageToggleBtn.setAttribute('aria-expanded', false);
    toggleOverlay();
  };


  // Event handlers

  // Toggle sidebar on menu button click
  sageToggleBtn.addEventListener('click', function(e) {
    var buttonTarget = document.getElementById(getBtnTarget(e));

    buttonTarget.classList.toggle('is-open');

    if (buttonTarget.classList.contains('is-open')) {
      this.setAttribute('aria-expanded', true);
    } else {
      this.setAttribute('aria-expanded', false);
    }

    toggleOverlay();
  });


  // Close overlay and menu on click
  sageNavOverlay.addEventListener('click', function(e) {
    resetSideNav();
  });


  // Close overlay and menu on esc keypress
  document.addEventListener('keyup', function(e) {
    var keyNum = 'which' in e ? e.which : e.keyCode;

    if (keyNum === 27 && document.querySelector('.sage-sidebar.is-open') !== null) {  // esc key
      resetSideNav();
    }
  });

  // Simulate contextual menu
  document.querySelector('.sage-live-option-menu-anchor').addEventListener('click', function(e) {
    var target = e.currentTarget;
    var isExpanded = target.getAttribute('aria-expanded') == 'true';
    target.setAttribute('aria-expanded', !isExpanded);
  });

}
