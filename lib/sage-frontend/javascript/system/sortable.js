import Sortable from 'sortablejs/modular/sortable.core.esm.js';

Sage.sortable = (function() {
  // ==================================================
  // Variables
  // ==================================================
  const SELECTOR_CONTAINER = 'data-js-sortable';
  const SELECTOR_ITEM_UPDATE_URL = 'data-js-sortable-update-url';
  const SETTINGS = {
    ghostClass: 'sage-sortable__item--ghost',
    chosenClass: 'sage-sortable__item--active'
  };

  let sortableContainerArray = document.querySelectorAll(`[${SELECTOR_CONTAINER}]`);


  // ==================================================
  // Functions
  // ==================================================

  function init() {
    console.log('sortable', sortableContainerArray);

    sortableContainerArray.forEach(function(el) {
      let resourceName = el.getAttribute(SELECTOR_CONTAINER);
      if (!resourceName) return console.error(`Sage Sortable requires a resource name \n\n EXAMPLE: \n [${SELECTOR_CONTAINER}="resource_name}"]`);

      Sortable.create(el, {
        ...SETTINGS,
        onEnd: function (evt) {
          let updateUrl = evt.item.getAttribute(SELECTOR_ITEM_UPDATE_URL)
          if (!updateUrl) return;  // If item doesn't have a [data-js-sortable-update-url="url-here"] attr, do nothing

          var data = new URLSearchParams();
              data.append('_method', 'PUT');
              data.append(`${resourceName}[sort_position]`, evt.newIndex);

          let request = new XMLHttpRequest();
          request.open('POST', updateUrl, true);
          request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
          request.send(data);
        }
      });
    });
  }

  return {
    init: init
  }

})();
