/**
  * docs.js
  *
  * Sage documentation app functions
  *
*/

if (document.querySelector('.sage-docs') !== null) {

  // Variables
  const sageBody = document.querySelector('.sage-docs').classList;
  const sageToggleBtn = document.querySelector('[data-js="sage-sidebar-menu"]');
  const sageNavOverlay = document.querySelector('.sage-overlay');


  // Functions

  // toggle overlay display
  // TODO: move to global utils
  const toggleOverlay = function (overlayClass) {
    const bodyClassName = overlayClass ? overlayClass : 'overlay-is-open';
    return sageBody.contains(bodyClassName) ? sageBody.remove(bodyClassName) : sageBody.add(bodyClassName);
  };

  // retrieve button target id
  const getBtnTarget = function(e) {
    return e.target.getAttribute('aria-controls') ? e.target.getAttribute('aria-controls') : e.target.getAttribute('data-js');
  };

  // reset sidenav state to closed/default
  const resetSideNav = function() {
    const openSidebar = document.querySelector('.sage-sidebar');

    openSidebar.classList.remove('is-open');
    sageToggleBtn.setAttribute('aria-expanded', false);
    toggleOverlay();
  };


  // Event handlers

  // Toggle sidebar on menu button click
  sageToggleBtn.addEventListener('click', function(e) {
    const buttonTarget = document.getElementById(getBtnTarget(e));

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
    const keyNum = 'which' in e ? e.which : e.keyCode;

    if (keyNum === 27 && document.querySelector('.sage-sidebar.is-open') !== null) {  // esc key
      resetSideNav();
    }
  });

  // Simulate contextual menu
  document.querySelector('.sage-live-option-menu-anchor').addEventListener('click', function(e) {
    const target = e.currentTarget;
    const isExpanded = target.getAttribute('aria-expanded') == 'true';
    target.setAttribute('aria-expanded', !isExpanded);
  });

}
