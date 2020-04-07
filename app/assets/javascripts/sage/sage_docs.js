/**
  * docs.js
  *
  * Sage documentation app functions
  *
*/

if (document.querySelector('.sage-docs') !== null) {


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
