Sage.search = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_SEARCH_INPUT = '.sage-search__input';
  const CLASS_VISIBLE = 'sage-search--has-text';


  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.addEventListener('keydown', searchOnInputHandler);
  }

  function unbind(el) {
    el.removeEventListener('keydown', searchOnInputHandler);
  }

  function searchOnInputHandler(evt) {
    const elParent = evt.currentTarget;
    const elInput = elParent.querySelector(SELECTOR_SEARCH_INPUT);

    hasValue(elInput) ? addVisibleButtonState(elParent) : removeVisibleButtonState(elParent);
  }

  // check if the search value has text or not
  function hasValue(el) {
    return el.value.length >= 0
  }

  function addVisibleButtonState(elParent) {
    elParent.classList.add(CLASS_VISIBLE);
  }

  function removeVisibleButtonState(elParent) {
    elParent.classList.remove(CLASS_VISIBLE);
  }

  return {
    init: init,
    unbind: unbind
  }

})();
