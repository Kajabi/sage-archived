Sage.panelControls = (() => {
  // ==================================================
  // Variables
  // ==================================================

  // Target list ID
  let targetListId = null;

  // List properties
  // TODO: Build list and its functions as a standalone object
  const listProps = {
    noun: null,
    page: null,
    itemsShown: null,
    itemsTotal: null,
  };

  const listCurrentRange = () => {
    if (!listProps.page || !listProps.itemsShown || !listProps.itemsTotal) {
      return null;
    }

    const start = ((listProps.page - 1) * listProps.itemsShown) + 1;
    const maxEnd = start + listProps.itemsShown;
    const end = start + listProps.itemsShown 
    return {
      start,
      end: maxEnd <= listProps.itemsTotal ? maxEnd : listProps.itemsTotal,
    };
  };

  const listCurrentRangeString = () => {
    if (!listCurrentRange()) {
      return null;
    }

    const { start, end } = listCurrentRange();
    return `${start}–${end}`;
  };

  const listDisplayString = () => {
    if (!listCurrentRangeString() || !listProps.itemsTotal) {
      return null;
    }

    let displayStr = `Displaying ${listCurrentRangeString()} of ${listProps.itemsTotal}`;

    if (listProps.noun && listProps.noun.plural) {
      displayStr += ` ${listProps.noun.plural}`;
    }

    return displayStr;
  };

  const listPageNext = () => {
    if (!listProps.page || !listNumPages()) {
      return null;
    }

    return listProps.page < listNumPages() ? listProps.page + 1 : false;
  };

  const listPagePrev = () => {
    if (!listProps.page) {
      return null;
    }

    return listProps.page > 1 ? listProps.page - 1 : false;
  };

  const listNumPages = () => {
    if (!listProps.itemsTotal || !listProps.itemsShown) {
      return null;
    }

    return Math.ceil(listProps.itemsTotal / listProps.itemsShown);
  };

  // Attributes
  const ATTRS = {
    EXPAND_COLLAPSE_STATUS: {
      JS: 'jsExpandCollapseStatus',
      HTML: 'data-js-expand-collapse-status',
    },
    LIST_ACTION: {
      JS: 'jsListAction',
      HTML: 'data-js-list-action',
    },
    LIST_ITEMS_SHOWN: {
      JS: 'jsListItemsShown',
      HTML: 'data-js-list-items-shown',
    },
    LIST_ITEMS_TOTAL: {
      JS: 'jsListItemsTotal',
      HTML: 'data-js-list-items-total',
    },
    LIST_NOUN: {
      JS: 'jsListNoun',
      HTML: 'data-js-list-noun',
    },
    LIST_PAGE_NUMBER: {
      JS: 'jsListPage',
      HTML: 'data-js-list-page',
    },
    LIST_SORT_BY: {
      JS: 'jsListSortBy',
      HTML: 'data-js-list-sort-by',
    },
    TARGET_LIST: {
      JS: 'jsPanelControls',
      HTML: 'data-js-panel-controls',
    },
  };

  // Classnames
  const CLASSES = {
    BULK_ACTIONS: 'sage-panel-controls__bulk-actions',
    BULK_ACTIONS_CHECKED: 'sage-panel-controls__bulk-actions--checked',
    BULK_ACTIONS_TOGGLE: 'sage-panel-controls__bulk-actions-checkbox',
    COLLAPSE_BTN: 'sage-panel-controls__collapse-btn',
    DROPDOWN_ITEM: 'sage-dropdown__item-control',
    EXPAND_COLLAPSE: 'sage-panel-controls__toolbar-btn-group--expand-collapse',
    EXPAND_BTN: 'sage-panel-controls__expand-btn',
    ITEM_COUNT_LABEL: 'sage-panel-controls__item-count-label',
    LIST_ACTIONS: 'sage-panel-controls__bulk-actions-dropdown',
    LIST_SORTS: 'sage-panel-controls__sorts',
    PAGINATION: 'sage-panel-controls__pagination',
    PAGINATION_NEXT: 'sage-panel-controls__pagination-next',
    PAGINATION_PREV: 'sage-panel-controls__pagination-prev',
  };

  // Selectors
  const SELECTORS = {
    BULK_ACTIONS_TOGGLE: `.${CLASSES.BULK_ACTIONS_TOGGLE}`,
    EXPAND_COLLAPSE: `.${CLASSES.EXPAND_COLLAPSE}`,
    ITEM_COUNT_LABEL: `.${CLASSES.ITEM_COUNT_LABEL}, .${CLASSES.BULK_ACTIONS_TOGGLE} > label`,
    LIST_ACTION_DROPDOWN: `.${CLASSES.LIST_ACTIONS}`,
    LIST_ACTION_ITEMS: `.${CLASSES.LIST_ACTIONS} .${CLASSES.DROPDOWN_ITEM}`,
    LIST_SORT_DROPDOWN: `.${CLASSES.LIST_SORTS}`,
    LIST_SORT_ITEMS: `.${CLASSES.LIST_SORTS} .${CLASSES.DROPDOWN_ITEM}`,
    PAGINATION: `.${CLASSES.PAGINATION}`,
    PAGINATION_NEXT: `.${CLASSES.PAGINATION_NEXT}`,
    PAGINATION_PREV: `.${CLASSES.PAGINATION_PREV}`,
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
  let elItemCountLabel = null;

  // ==================================================
  // Functions
  // ==================================================

  /*
    TODO:

    - [x] Click on bulk actions trigger box toggling
    - [x] Click on expand/Collapse toggle controls and sends custom event
    - [x] Click on pagination sends custom event
    - [x] Click on actions sends custom event
    - [x] Click on sorts sends custom event
    - [x] Discover attributes from the target table
    - [x] Set bulk actions/list description based on discovered list props
    - [x] Set pagination button status based on discovered list props
    - [ ] Respond to having selected some items from the target table
  */

  // Discover target list and its properties

  const discoverTargetListProps = () => {
    elTarget = document.getElementById(targetListId);

    // ensure Target is found before proceeding
    if (!elTarget) {
      return;
    }

    // Retrieve list properties
    listProps.page = Number(elTarget.dataset[ATTRS.LIST_PAGE_NUMBER.JS]);
    listProps.itemsShown = Number(elTarget.dataset[ATTRS.LIST_ITEMS_SHOWN.JS]);
    listProps.itemsTotal = Number(elTarget.dataset[ATTRS.LIST_ITEMS_TOTAL.JS]);
    const rawNoun = elTarget.dataset[ATTRS.LIST_NOUN.JS];
    if (rawNoun) {
      const rawNounSplit = rawNoun.split(",");
      listProps.noun = {
        singular: rawNounSplit[1] || null,
        plural: rawNounSplit[0],
      };
    }

    // Update item count display
    updateItemCountDisplay();

    // Update next and previous buttons
    updatePaginationButtonStatus(
      elRoot.querySelector(SELECTORS.PAGINATION_NEXT),
      listPageNext()
    );
    updatePaginationButtonStatus(
      elRoot.querySelector(SELECTORS.PAGINATION_PREV),
      listPagePrev()
    );
  };

  const updateItemCountDisplay= () => {
    // TODO: Bulk action label
    // Ensure there's a container for the display string
    if (!elItemCountLabel) {
      elItemCountLabel = ""; // TODO: New element
    }

    // Get and show the display string
    const listDisplayStringValue = listDisplayString();
    if (listDisplayStringValue) {
      elItemCountLabel.innerHTML = listDisplayStringValue;
    }
  };

  const updatePaginationButtonStatus = (_btn, _val) => {
    if (!_btn) {
      return null;
    }

    if (_val) {
      _btn.disabled = false;
    } else {
      _btn.disabled = true;
    }
  };


  // Core event handlers

  const handleActionClick = (ev) =>  {
    const el = ev.target;

    // Only respond when dropdown item is clicked
    if (!el.classList.contains(CLASSES.DROPDOWN_ITEM)) {
      return;
    }

    dispatchEvent(EVENTS.BULK_ACTION, { action: el.dataset[ATTRS.LIST_ACTIONS.JS] });
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
    if (elExpandCollapseContainer.dataset[ATTRS.EXPAND_COLLAPSE_STATUS.JS] === DATA_EXPAND_COLLAPSE_STATUSES.EXPAND) {
      eventType = EVENTS.EXPAND_COLLAPSE.EXPAND;
      elExpandCollapseContainer.dataset[ATTRS.EXPAND_COLLAPSE_STATUS.JS] = DATA_EXPAND_COLLAPSE_STATUSES.COLLAPSE;
      elRoot.querySelector(`.${CLASSES.COLLAPSE_BTN}`).focus();
    } else {
      eventType = EVENTS.EXPAND_COLLAPSE.COLLAPSE;
      elExpandCollapseContainer.dataset[ATTRS.EXPAND_COLLAPSE_STATUS.JS] = DATA_EXPAND_COLLAPSE_STATUSES.EXPAND;
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

    dispatchEvent(EVENTS.SORT, { sortBy: el.dataset[ATTRS.LIST_SORT_BY.JS] });
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
  
    // Set up core elements for listeners
    elBulkActionsToggle = elRoot.querySelector(SELECTORS.BULK_ACTIONS_TOGGLE);
    elExpandCollapseButton = elRoot.querySelector(SELECTORS.EXPAND_COLLAPSE);
    elItemCountLabel = elRoot.querySelector(SELECTORS.ITEM_COUNT_LABEL);
    elPaginationItem = elRoot.querySelector(SELECTORS.PAGINATION);
    elListActionDropdown = elRoot.querySelector(SELECTORS.LIST_ACTION_DROPDOWN);
    elListSortDropdown = elRoot.querySelector(SELECTORS.LIST_SORT_DROPDOWN);

    // Add event listeners
    bind();

    // Discover target list
    targetListId = elRoot.dataset[ATTRS.TARGET_LIST.JS];
    if (targetListId) {
      discoverTargetListProps();
    }
  };


  // Public interface
  return {
    init: init,
    unbind: unbind,
  };
})();
