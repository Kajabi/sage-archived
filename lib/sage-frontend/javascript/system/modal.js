Sage.modal = (function() {

  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_MODAL = 'data-js-modal';
  const SELECTOR_MODAL_TRIGGER_CLOSE = 'data-js-modal-close';
  const SELECTOR_MODAL_TRIGGER_DESTROY = 'data-js-modal-destroy';
  const SELECTOR_MODAL_TRIGGER_OPEN = 'data-js-modal-open';

  // ==================================================
  // Functions
  // ==================================================

  function initDocumentListener() {
    document.addEventListener('click', function(evt) {
      let el = evt.target;

      // Modal container has been clicked
      if ( el.hasAttribute(SELECTOR_MODAL) ) {
        closeModal(el);

      // Close trigger has been clicked
      } else if ( el.hasAttribute(SELECTOR_MODAL_TRIGGER_CLOSE) ) {
        elModal = el.closest(`[${SELECTOR_MODAL}]`);
        closeModal(elModal);

      // Destroy trigger has been clicked
      } else if ( el.hasAttribute(SELECTOR_MODAL_TRIGGER_DESTROY) ) {
        elModal = el.closest(`[${SELECTOR_MODAL}]`);
        destroyModal(elModal);

      // Open trigger has been clicked
      } else if ( el.hasAttribute(SELECTOR_MODAL_TRIGGER_OPEN) ) {
        openModal( el.getAttribute(SELECTOR_MODAL_TRIGGER_OPEN) )

      }
    })
  }

  function openModal(target) {
    openFromRemote(target);
    // if ( Sage.util.isUrl(target) ) {
    //   openFromRemote(target);
    // } else {
    //   openFromDocument(target);
    // }
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

  function destroyModal(el) {
    el.parentNode.removeChild(el);
  }

  return {
    initDocumentListener: initDocumentListener
  }

})();
