Sage.modal = (function() {

  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_MODAL = 'data-js-modal';
  const SELECTOR_MODAL_CLOSE = 'data-js-modal-close';
  const SELECTOR_MODALTRIGGER = 'data-js-modaltrigger';

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.addEventListener('click', function(evt){
      let el = evt.target;

      // Modal Container has been clicked
      if ( el.hasAttribute(SELECTOR_MODAL) ) {
        closeModal(el);

      // Modal Close Button has been clicked
      } else if ( el.hasAttribute(SELECTOR_MODAL_CLOSE) ) {
        elModal = el.closest(`[${SELECTOR_MODAL}]`);
        closeModal(elModal);
      }
    });
  }

  function destroy() {
    // no-op
  }

  function initTrigger(el) {
    el.addEventListener('click', function(evt){
      let modalId = evt.target.getAttribute(SELECTOR_MODALTRIGGER);
      openModal(modalId);
    });
  }

  function destroyTrigger() {
    // no-op
  }

  function openModal(modalId) {
    let modal = document.querySelector(`[${SELECTOR_MODAL}="${modalId}"]`);
    modal.classList.add('sage-modal--active');
  }

  function closeModal(el) {
    el.classList.remove('sage-modal--active');
  }

  function eventHandlerCloseAll() {
    let modals = Sage.util.nodelistToArray(document.querySelectorAll(`[${SELECTOR_MODAL}]`));
    modals.forEach(el => closeModal(el));
  }

  return {
    init: init,
    initTrigger: initTrigger,
    destroy: destroy,
    destroyTrigger: destroyTrigger,
    eventHandlerCloseAll: eventHandlerCloseAll
  }

})();
