Sage.modal = (function() {
  // ==================================================
  // Variables
  // ==================================================
  const SELECTOR_MODAL = 'data-js-modal';
  const SELECTOR_MODAL_TRIGGER = 'data-js-modal-trigger';
  let modalTrigger = document.querySelectorAll(`[${SELECTOR_MODAL_TRIGGER}]`);
  console.log()


  // ==================================================
  // Functions
  // ==================================================

  function init() {
    modalTrigger.forEach(function(el) {
      // buildA11y(el);
      el.addEventListener('click', handleClick);
    });
  }

  function handleClick(evt) {
    let target = evt.currentTarget;
    if (!target) return;

    let modalId = target.getAttribute(SELECTOR_MODAL_TRIGGER);
    let modal = document.querySelector(`[${SELECTOR_MODAL}="${modalId}"]`);

    modal.classList.add('sage-modal--active');
  }

  // function buildA11y(el) {
  //   el.setAttribute('aria-has-popup', true);
  //   el.setAttribute('aria-expanded', false);
  //   el.setAttribute('tabindex', 0);
  //   el.setAttribute('role', 'button');
  // }

  return {
    init: init
  }

})();
