Sage.select = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var elSelectParentList = document.querySelectorAll('.sage-select'),
      classActive        = 'sage-select--value-selected',
      htmlArrow          = '<i class="sage-select__arrow" aria-hidden="true"></i>';

  // ==================================================
  // Functions
  // ==================================================

  function updateValueSelectedState(value, elSelectParent) {
    var cL = elSelectParent.classList;
    Sage.util.isEmptyString(value) ? cL.remove(classActive) : cL.add(classActive);
  }

  function disableSelectPromptOptions(elSelect) {
    [].forEach.call(elSelect.options, function(elOption) {
      if (elOption.text.startsWith('--')) elOption.setAttribute('disabled', true);
    });
  }

  function bindEvents(elSelect, elSelectParent) {
    elSelect.addEventListener('change', function(evt) {
      updateValueSelectedState(evt.target.value, elSelectParent)
    });
  }

  function init() {
    elSelectParentList.forEach(function(elSelectParent) {
      var elSelect = elSelectParent.querySelector('select');

      elSelectParent.insertAdjacentHTML('beforeEnd', htmlArrow);
      disableSelectPromptOptions(elSelect);
      updateValueSelectedState(elSelect.value, elSelectParent);

      bindEvents(elSelect, elSelectParent);
    });
  }

  return {
    init: init,
  };

})();
