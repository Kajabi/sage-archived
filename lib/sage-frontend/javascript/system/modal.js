Sage.modal = (function() {
  // ==================================================
  // Variables
  // ==================================================
  const SELECTOR_MODAL = 'data-js-modal';
  let modals = document.querySelectorAll(`[${SELECTOR_MODAL}]`);

  const SELECTOR_MODAL_TRIGGER = 'data-js-modal-trigger';
  let modalTriggers = document.querySelectorAll(`[${SELECTOR_MODAL_TRIGGER}]`);

  console.log(modals, modalTriggers);


  // ==================================================
  // Functions
  // ==================================================

  function init() {
    modalTriggers.forEach(function(el) {
      el.addEventListener('click', handleTriggerClick);
    });

    modals.forEach(function(el) {
      el.addEventListener('click', handleClose);
    });
  }

  function handleTriggerClick(evt) {
    let target = evt.currentTarget;
    let modalId = target.getAttribute(SELECTOR_MODAL_TRIGGER);
    let modal = document.querySelector(`[${SELECTOR_MODAL}="${modalId}"]`);

    modal.classList.add('sage-modal--active');
  }

  function handleClose(evt) {
    let target = evt.target;
    if (target !== this) return;

    target.classList.remove('sage-modal--active');
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
