Sage.search = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_SEARCH = 'data-js-search';
  const SELECTOR_SEARCH_INPUT = '.sage-search__input';
  const SELECTOR_SEARCH_BUTTON = '.sage-search__reset-button';
  const CLASS_VISIBLE = 'sage-search--has-text';


  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    const elButton = el.querySelector(SELECTOR_SEARCH_BUTTON);
    const elInput = el.querySelector(SELECTOR_SEARCH_INPUT);
    
    // check the input for a value on load
    hasValue(elInput) ? addVisibleButtonState(el) : removeVisibleButtonState(el);

    el.addEventListener('keydown', searchOnInputHandler);
    elButton.addEventListener('click', searchClearClickHandler);
  }

  function unbind(el) {
    const elButton = el.querySelector(SELECTOR_SEARCH_BUTTON);

    el.removeEventListener('keydown', searchOnInputHandler);
    elButton.removeEventListener('click', searchClearClickHandler);
  }

  function searchOnInputHandler(evt) {
    const elParent = evt.currentTarget;
    const elInput = elParent.querySelector(SELECTOR_SEARCH_INPUT);

    hasValue(elInput) ? addVisibleButtonState(elParent) : removeVisibleButtonState(elParent);
  }

  function searchClearClickHandler(evt) {
    const elParent = evt.currentTarget.closest(`[${SELECTOR_SEARCH}]`);
    const elInput = elParent.querySelector(SELECTOR_SEARCH_INPUT);
    const event = new Event('change');

    elParent.classList.remove(CLASS_VISIBLE);
    elInput.value = ""; /* reset the search field */
    elInput.dispatchEvent(event);/* force refresh with blur event */
  }

  // check if the search value has text or not
  function hasValue(el) {
    return el.value.length > 0
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
