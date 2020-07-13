Sage.modal = (function() {

  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_MODAL = 'data-js-modal';
  const SELECTOR_MODAL_CLOSE = 'data-js-modal-close';
  const SELECTOR_MODAL_DESTROY = 'data-js-modal-destroy';
  const SELECTOR_MODALTRIGGER = 'data-js-modalTrigger';

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.addEventListener('click', function(evt){
      let el = evt.target;

      // Modal container has been clicked
      if ( el.hasAttribute(SELECTOR_MODAL) ) {
        closeModal(el);

      // Close trigger has been clicked
      } else if ( el.hasAttribute(SELECTOR_MODAL_CLOSE) ) {
        elModal = el.closest(`[${SELECTOR_MODAL}]`);
        closeModal(elModal);

      // Close trigger has been clicked
      } else if ( el.hasAttribute(SELECTOR_MODAL_DESTROY) ) {
        elModal = el.closest(`[${SELECTOR_MODAL}]`);
        elModal.parentNode.removeChild(elModal);
      }
    });
  }

  function initTrigger(el) {
    el.addEventListener('click', function(evt){
      let modalId = evt.target.getAttribute(SELECTOR_MODALTRIGGER);
      console.log(modalId);
      openModal(modalId);
    });
  }

  function destroy(el) {
    console.log('destroy', el);
  }

  function destroyTrigger(el) {
    // No-op
    return;
  }

  function openModal(target) {
    if ( Sage.util.isUrl(target) ) {
      openFromRemote(target);
    } else {
      openFromDocument(target);
    }
  }

  function openFromRemote(modalUrl) {
    Sage.util.ajaxRequestWithJsInjection('GET', modalUrl);
  }

  function openFromDocument(modalId) {
    let modal = document.querySelector(`[${SELECTOR_MODAL}="${modalId}"]`);
    modal.classList.add('sage-modal--active');
  }

  function closeModal(el) {
    el.classList.remove('sage-modal--active');
  }

  return {
    init: init,
    initTrigger: initTrigger,
    destroy: destroy,
    destroyTrigger: destroyTrigger
  }

})();
