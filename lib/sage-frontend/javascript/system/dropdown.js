Sage.dropdown = (function() {
  // ==================================================
  // Variables
  // ==================================================



  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    buildA11y(el);
    el.addEventListener('click', handleClick);
    el.addEventListener('keyup', handleKeyAction);
  }

  function unbind(el) {
    el.removeEventListener('click', handleClick);
    el.removeEventListener('keyup', handleKeyAction);
  }

  function handleClick(evt) {
    let el = evt.currentTarget;

    // Stop if the element issuing the event is a search field
    if (evt.target.classList.contains('sage-search__input')) {
      return;
    }

    isExpanded(el) ? close(el) : open(el);
  }

  function handleKeyAction(evt) {
    let el = evt.currentTarget;

    if (evt.keyCode === 13 && !isExpanded(el)) {
      open(el);
    } else if (evt.keyCode === 27) {
      close(el);
    }
  }

  function open(el) {
    el.setAttribute('aria-expanded', 'true');
  }

  function close(el) {
    el.setAttribute('aria-expanded', 'false');
  }

  function isExpanded(el) {
    return el.getAttribute('aria-expanded') === 'true';
  }

  function buildA11y(el) {
    el.setAttribute('aria-haspopup', true);
    el.setAttribute('aria-expanded', false);
  }

  return {
    init: init,
    unbind: unbind,
  }

})();
