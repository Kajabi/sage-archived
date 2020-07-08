import Sortable from 'sortablejs/modular/sortable.core.esm.js';

Sage.sortable = (function() {
  // ==================================================
  // Variables
  // ==================================================
  const SELECTOR_PARENT = "data-js-sortable";
  const SELECTOR_CHILD = "data-js-sortable-item-url";
  const SETTINGS = {
    ghostClass: "sage-sortable__item--ghost",
    chosenClass: "sage-sortable__item--active"
  };

  let sortableContainerArray = document.querySelectorAll(`[${SELECTOR_PARENT}]`);


  // ==================================================
  // Functions
  // ==================================================

  function init() {
    console.log('sortable', sortableContainerArray);

    sortableContainerArray.forEach(function(el) {
      let resourceName = el.getAttribute(SELECTOR_PARENT);
      if (!resourceName) return console.error(`Sage Sortable requires a resource name \n\n EXAMPLE: \n [${SELECTOR_PARENT}="resource_name}"]`);

      Sortable.create(el, {
        ...SETTINGS,
        onEnd: function (evt) {
          console.log('resourceName', resourceName)
          let url = evt.item.getAttribute(SELECTOR_CHILD)
          console.log('url', url);
          if (!url) return;

          let data = { _method: "PUT" };
          data[resourceName] = { sort_position: evt.newIndex };

          let request = new XMLHttpRequest();
          request.open('POST', updateUrl, true);
          request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
          request.send(data);


          // $.ajax({ type: 'POST', url: url, dataType: 'script', data: data });


          // var itemEl = evt.item;  // dragged HTMLElement
          // evt.to;    // target list
          // evt.from;  // previous list
          // evt.oldIndex;  // element's old index within old parent
          // evt.newIndex;  // element's new index within new parent
          // evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
          // evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
        }
      });
    });
  }

  return {
    init: init
  }

})();
