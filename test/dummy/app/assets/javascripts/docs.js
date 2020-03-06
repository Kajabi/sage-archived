if (document.querySelector('.sage-docs') !== null) {

// Variables
  var sageDocs = document.querySelector('.sage-docs');
  var sageToggleBtn = document.querySelector('[data-js-action="sage-sidebar__toggle"]');


// Event handlers

  // Sidebar click events
  sageToggleBtn.addEventListener('click', function(e) {
    sageDocs.classList.toggle('sidebar-is-open');
    if (document.querySelector('.sidebar-is-open') !== null) {
      this.setAttribute('aria-expanded', true);
    } else {
      this.setAttribute('aria-expanded', false);
    }
  });

  // sidebar key events
  document.addEventListener('keyup', function(e) {
    var keyNum = 'which' in e ? e.which : e.keyCode;

    if (keyNum === 27 && document.querySelector('.sidebar-is-open') !== null) {  // esc key
        sageDocs.classList.remove('sidebar-is-open');
    }
  })
}
