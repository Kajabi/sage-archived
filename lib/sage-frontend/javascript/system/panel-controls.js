Sage.panelControls = (() => {
  // ==================================================
  // Variables
  // ==================================================

  // Target list ID
  let targetListId = null;

  // Classnames
  const CLASSES = {
    BULK_ACTIONS: 'sage-panel-controls__bulk-actions',
    BULK_ACTIONS_CHECKED: 'sage-panel-controls__bulk-actions--checked',
    BULK_ACTIONS_TOGGLE: 'sage-panel-controls__bulk-actions-checkbox',
    EXPAND_COLLAPSE: 'sage-panel-controls__toolbar-btn-group--expand-collapse',
    EXPAND_BTN: 'sage-panel-controls__expand-btn',
    COLLAPSE_BTN: 'sage-panel-controls__collapse-btn',
    LIST_ACTIONS: 'sage-panel-controls__bulk-actions-dropdown',
    LIST_SORTS: 'sage-panel-controls__sorts',
    PAGINATION: 'sage-panel-controls__pagination',
    PAGINATION_PREV: 'sage-panel-controls__pagination-prev',
    PAGINATION_NEXT: 'sage-panel-controls__pagination-next',
    DROPDOWN_ITEM: 'sage-dropdown__item-control',
  };

  // Selectors
  const SELECTORS = {
    BULK_ACTIONS_TOGGLE: `.${CLASSES.BULK_ACTIONS_TOGGLE}`,
    EXPAND_COLLAPSE: `.${CLASSES.EXPAND_COLLAPSE}`,
    PAGINATION: `.${CLASSES.PAGINATION}`,
    LIST_ACTION_DROPDOWN: `.${CLASSES.LIST_ACTIONS}`,
    LIST_ACTION_ITEMS: `.${CLASSES.LIST_ACTIONS} .${CLASSES.DROPDOWN_ITEM}`,
    LIST_SORT_DROPDOWN: `.${CLASSES.LIST_SORTS}`,
    LIST_SORT_ITEMS: `.${CLASSES.LIST_SORTS} .${CLASSES.DROPDOWN_ITEM}`,
  };

  // Data values
  const DATA_EXPAND_COLLAPSE_STATUSES = {
    EXPAND: 'expand',
    COLLAPSE: 'collapse'
  };

  // Events
  const EVENTS = {
    ROOT_TYPE: 'sage.panelControls.change',
    BULK_ACTION: 'list:action',
    EXPAND_COLLAPSE: {
      COLLAPSE: 'list:collapse',
      EXPAND: 'list:expand',
    },
    PAGINATION: {
      PREV: 'pagination:prev',
      NEXT: 'pagination:next',
    },
    SELECTION: {
      ALL: 'list:selectAll',
      NONE: 'list:selectNone',
      // TODO: SOME: 'list:selectSome',
    },
    SORT: 'list:sort',
  };

  // Elements
  let elRoot = null;
  let elBulkActionsToggle = null;
  let elExpandCollapseButton = null;
  let elListActionDropdown = null;
  let elListSortDropdown = null;
  let elPaginationItem = null;

  // ==================================================
  // Functions
  // ==================================================

  /*
    TODO:

    - [x] Click on bulk actions trigger box toggling
    - [x] Click on expand/Collapse toggle controls and sends custom event
    - [x] Click on pagination sends custom event
    - [ ] Respond to having selected some items from the target table
    - [ ] Click on actions sends custom event
    - [ ] Click on sorts sends custom event
  */


  // Core event handlers

  const handleActionClick = (ev) =>  {
    const el = ev.target;

    // Only respond when dropdown item is clicked
    if (!el.classList.contains(CLASSES.DROPDOWN_ITEM)) {
      return;
    }

    dispatchEvent(EVENTS.BULK_ACTION, { action: el.dataset.jsListAction });
  };

  const handleBulkActionClick = (ev) =>  {
    const elBulkActionsContainer = ev.target.closest(`.${CLASSES.BULK_ACTIONS}`);

    // TODO: Consider switching to an attr-based approach that could track "all" or number of items

    // Ensure --checked modifier is off
    elBulkActionsContainer.classList.remove(CLASSES.BULK_ACTIONS_CHECKED);
    
    // If checked add --checked modifier if the checkbox is checked and release selectAll event
    // Otherwise release deselect event
    let eventType = null;
    if (ev.target.checked) {
      elBulkActionsContainer.classList.add(CLASSES.BULK_ACTIONS_CHECKED);
      eventType = EVENTS.SELECTION.ALL;
    } else {
      eventType = EVENTS.SELECTION.NONE;
    }

    dispatchEvent(eventType, {});
  };

  const handleExpandCollapseClick = (ev) =>  {
    const elExpandCollapseContainer = ev.target.closest(`.${CLASSES.EXPAND_COLLAPSE}`);

    // Toggle to new button including changing focus
    // First set which event should be triggered
    // Then switch the status and focus to opposite option
    let eventType = null;
    if (elExpandCollapseContainer.dataset.jsExpandCollapseStatus === DATA_EXPAND_COLLAPSE_STATUSES.EXPAND) {
      eventType = EVENTS.EXPAND_COLLAPSE.EXPAND;
      elExpandCollapseContainer.dataset.jsExpandCollapseStatus = DATA_EXPAND_COLLAPSE_STATUSES.COLLAPSE;
      elRoot.querySelector(`.${CLASSES.COLLAPSE_BTN}`).focus();
    } else {
      eventType = EVENTS.EXPAND_COLLAPSE.COLLAPSE;
      elExpandCollapseContainer.dataset.jsExpandCollapseStatus = DATA_EXPAND_COLLAPSE_STATUSES.EXPAND;
      elRoot.querySelector(`.${CLASSES.EXPAND_BTN}`).focus();
    }

    dispatchEvent(eventType, {});
  };

  const handlePaginationClick = (ev) =>  {
    const elClicked = ev.target;

    // Get event type for whichever button was pressed
    let eventType = null;
    if (elClicked.classList.contains(CLASSES.PAGINATION_PREV)) {
      eventType = EVENTS.PAGINATION.PREV;
    } else if (elClicked.classList.contains(CLASSES.PAGINATION_NEXT)) {
      eventType = EVENTS.PAGINATION.NEXT;
    }

    dispatchEvent(eventType, {});
  };

  const handleSortClick = (ev) =>  {
    const el = ev.target;

    // Only respond when dropdown item is clicked
    if (!el.classList.contains(CLASSES.DROPDOWN_ITEM)) {
      return;
    }

    dispatchEvent(EVENTS.SORT, { sortBy: el.dataset.jsListSortBy });
  };


  // Dispatch events

  const dispatchEvent = (evType, data) => {
    document.dispatchEvent(
      new CustomEvent(
        EVENTS.ROOT_TYPE,
        { 
          detail: {
            targetListId,
            type: evType,
            ...data
          }
        }
      ));
  };


  // Bind and unbind

  const bind = () => {
    if (elBulkActionsToggle) {
      elBulkActionsToggle.addEventListener('click', handleBulkActionClick);
    }

    if (elExpandCollapseButton) {
      elExpandCollapseButton.addEventListener('click', handleExpandCollapseClick);
    }

    if (elPaginationItem) {
      elPaginationItem.addEventListener('click', handlePaginationClick);
    }

    if (elListActionDropdown) {
      elListActionDropdown.addEventListener('click', handleActionClick);
    }

    if (elListSortDropdown) {
      elListSortDropdown.addEventListener('click', handleSortClick);
    }
  };

  const unbind = () => {
    if (elBulkActionsToggle) {
      elBulkActionsToggle.removeEventListener('click', handleBulkActionClick);
    }

    if (elExpandCollapseButton) {
      elExpandCollapseButton.removeEventListener('click', handleExpandCollapseClick);
    }

    if (elPaginationItem) {
      elPaginationItem.removeEventListener('click', handlePaginationClick);
    }

    if (elListActionDropdown) {
      elListActionDropdown.removeEventListener('click', handleActionClick);
    }

    if (elListSortDropdown) {
      elListSortDropdown.removeEventListener('click', handleSortClick);
    }
  };


  // Initiation
  const init = (el) => {
    // Save element as root element
    elRoot = el;

    targetListId = elRoot.dataset.jsPanelControls;
    console.log('targetListId', targetListId);
  
    // Set up core elements for listeners
    elBulkActionsToggle = elRoot.querySelector(SELECTORS.BULK_ACTIONS_TOGGLE);
    elExpandCollapseButton = elRoot.querySelector(SELECTORS.EXPAND_COLLAPSE);
    elPaginationItem = elRoot.querySelector(SELECTORS.PAGINATION);
    elListActionDropdown = elRoot.querySelector(SELECTORS.LIST_ACTION_DROPDOWN);
    elListSortDropdown = elRoot.querySelector(SELECTORS.LIST_SORT_DROPDOWN);

    // Add event listeners
    bind();
  };


  // Interface
  return {
    init: init,
    unbind: unbind,
  };
})();
