Sage.modal = (function() {

  // ==================================================
  // Variables
  // ==================================================
  const SELECTOR_MODAL = 'data-js-modal';
  let modals = document.querySelectorAll(`[${SELECTOR_MODAL}]`);

  const SELECTOR_MODAL_TRIGGER = 'data-js-modal-trigger';
  let modalTriggers = document.querySelectorAll(`[${SELECTOR_MODAL_TRIGGER}]`);

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

  return {
    init: init
  }

})();
