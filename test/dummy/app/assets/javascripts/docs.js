/**
  * docs.js
  *
  * Sage documentation app functions
  *
*/

if (document.querySelector('.sage-docs') !== null) {

  // Variables
  const sageBody = document.querySelector('.sage-docs').classList;
  const sageToggleBtn = document.querySelector('[data-js-action="sage-sidebar__toggle"]');


  // Functions
  function toggleOverlay(overlayClass) {
    const bodyClassName = overlayClass ? overlayClass : 'overlay-is-open';
    return sageBody.contains(bodyClassName) ? sageBody.remove(bodyClassName) : sageBody.add(bodyClassName);
  }


  // Event handlers

  // Sidebar
  sageToggleBtn.addEventListener('click', function(e) {
    sageBody.toggle('sidebar-is-open');
    if (document.querySelector('.sidebar-is-open') !== null) {
      this.setAttribute('aria-expanded', true);
    } else {
      this.setAttribute('aria-expanded', false);
    }
    toggleOverlay();
  });

  document.addEventListener('keyup', function(e) {
    const keyNum = 'which' in e ? e.which : e.keyCode;

    if (keyNum === 27 && document.querySelector('.sidebar-is-open') !== null) {  // esc key
        sageBody.remove('sidebar-is-open');
        sageToggleBtn.setAttribute('aria-expanded', false);
        toggleOverlay();
    }
  });


}
