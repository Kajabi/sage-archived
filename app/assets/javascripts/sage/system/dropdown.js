"use strict";

Sage.Dropdown = function(el) {
  this.init(el);
};

Sage.Dropdown.prototype = {
  init(el){
    this.elements = {
      parent: el,
      field: el.querySelector('[data-js-sagedropdown-field]'),
      search: el.querySelector('[data-js-sagedropdown-search]'),
      optionContainer: el.querySelector('[data-js-sagedropdown-optioncontainer]'),
      options: [...el.querySelectorAll('[data-js-sagedropdown-option]')]
    };

    this.classNames = {
      parentHasValue: 'sage-dropdown--has-value',
      parentActive: 'sage-dropdown--active',
      optionSelected: 'sage-dropdown__option--selected',
      optionHidden: 'sage-dropdown__option--hidden',
      optionFocus: 'sage-dropdown__option--focused',
    }


    this.htmlInit();
    this.inputFieldInit();
    this.bindOpenClickHandler(true);

    this.elements.search.addEventListener('focus', () => this.setDropdownActive(true));
    this.elements.search.addEventListener('blur', () => this.setDropdownActive(false));

    this.elements.options.forEach(item => {
      item.addEventListener('mousedown', (evt) => this.setSelectedOption(evt.currentTarget));
    });
  },

  htmlInit() {
    // Keyboard Focus ---------------------------------
    // Note: Dropdown show/hide is tied to the focus of the search field
    //       removing these breaks the show/hide functionality.
    this.elements.search.setAttribute("tabIndex", 0);
    this.elements.field.setAttribute("tabIndex", -1);
    this.elements.field.setAttribute("readonly", true);
    // Keyboard Focus END -----------------------------

    // A11Y -------------------------------------------
    const UNIQUE_ID = this.elements.field.getAttribute("placeholder").replace(/\s/g, '');

    this.elements.parent.setAttribute("aria-haspopup", "listbox");
    this.elements.parent.setAttribute("role", "combobox");
    this.elements.parent.setAttribute("aria-owns", UNIQUE_ID);
    this.elements.parent.setAttribute("aria-expanded", false);

    this.elements.optionContainer.setAttribute("role", "listbox");
    this.elements.optionContainer.id = UNIQUE_ID;
    // A11Y END ---------------------------------------
  },

  // Auto-Select Value In Options On Init -------------
  inputFieldInit() {
    const fieldValue = this.elements.field.value;
    if (fieldValue) {
      this.setSelectedOption(
        this.elements.options.filter(elOption => elOption.dataset.jsSagedropdownOption == fieldValue)
      );
    }
  },
  // Auto-Select Value In Options On Init END ---------

  // Bind Open Click Handler --------------------------
  // Note: We undbind the click handler when the dropdown is active
  //       to avoid conflicts with the search blur handle.
  bindOpenClickHandler(bool){
    if (bool) {
      this.elements.parent.addEventListener('mousedown',  this.elements.parent._clickListener = function fn(evt) {
        evt.preventDefault();
        this.elements.search.focus();
      }.bind(this), false);
    } else if (!bool) {
      this.elements.parent.removeEventListener('mousedown', this.elements.parent._clickListener, false);
    }
  },
  // Bind Open Click Handler END ----------------------

  // Getters & Setters --------------------------------
  isDropdownActive(){
    return !!this.elements.parent.classList.contains(this.classNames.parentActive)
  },

  getVisibleOptions(){
    return this.elements.options.filter(elOption =>
      !elOption.classList.contains(this.classNames.optionHidden)
    );
  },

  getFocusedOption(){
    return this.elements.options.filter(elOption =>
      elOption.classList.contains(this.classNames.optionFocus)
    )[0];
  },

  getSelectedOption(){
    return this.elements.options.filter(elOption =>
      elOption.classList.contains(this.classNames.optionSelected)
    )[0];
  },

  setDropdownActive(show) {
    if (show && !this.isDropdownActive()) {
      this.bindOpenClickHandler(false);
      this.elements.parent.setAttribute("aria-expanded", true);
      this.elements.parent.classList.add(this.classNames.parentActive);
      this.setFocusedOption(this.getSelectedOption() || this.elements.options[0]);
      this.filter('');
      this.elements.search.value = '';

      document.addEventListener('keyup', window.Sage._keyboardListenerDropdown = function fn(evt) {
        this.keyAction(evt);
      }.bind(this), false);

    } else if (!show && this.isDropdownActive()) {
      this.elements.parent.setAttribute("aria-expanded", false);
      this.bindOpenClickHandler(true);
      this.elements.parent.classList.remove(this.classNames.parentActive);

      document.removeEventListener('keyup', window.Sage._keyboardListenerDropdown, false);
    }
  },

  setFocusedOption(elOption){
    const removeAllFocused = () => {
      this.elements.options.forEach(elOption => {
        elOption.classList.remove(this.classNames.optionFocus);
      });
    };

    if (elOption) {
      removeAllFocused();
      elOption.classList.add(this.classNames.optionFocus);
      this.scrollToOption(elOption);
    } else if (elOption === false) {
      removeAllFocused();
    }
  },

  setSelectedOption: function(elOption) {
    const parentClassList = this.elements.parent.classList;
    this.elements.field.value = elOption.dataset.jsSagedropdownOption;

    this.elements.options.forEach(elOption => {
      elOption.classList.remove(this.classNames.optionSelected);
    });

    if (elOption.dataset.jsSagedropdownOption.length) {
      parentClassList.add(this.classNames.parentHasValue);
      elOption.classList.add(this.classNames.optionSelected);
    } else {
      parentClassList.remove(this.classNames.parentHasValue);
    }
  },
  // Getters & Setters END -------------------------------

  filter(value) {
    this.elements.options.forEach(elOption => {
      if (
        !elOption.dataset.jsSagedropdownOption.length ||
        elOption.dataset.jsSagedropdownOption.toUpperCase().startsWith(value.toUpperCase())
      ) {
        elOption.classList.remove(this.classNames.optionHidden);
      } else {
        elOption.classList.add(this.classNames.optionHidden);
      }
    });

    this.setFocusedOption(this.getVisibleOptions()[0]);
  },

  keyAction(evt) {
    switch(evt.key) {
      case 'Escape':
        this.elements.search.blur();
      break;
      case 'ArrowDown':
        this.keyboardFocusDirection('down');
        break;
      case 'ArrowUp':
        this.keyboardFocusDirection('up');
      break;
      case 'Enter':
        this.setSelectedOption(this.getFocusedOption());
        this.elements.search.blur();
      break;
      default:
        this.filter(this.elements.search.value);
      break;
    }
  },

  keyboardFocusDirection(direction) {
    const visibleOptions = this.getVisibleOptions(),
          focusedOption = this.getFocusedOption(),
          currentIndex = visibleOptions.findIndex((elOption) => elOption == focusedOption);

    if (direction == 'up' && currentIndex != 0) {
      this.setFocusedOption(visibleOptions[currentIndex - 1]);
    } else if (direction == 'down' && currentIndex != (visibleOptions.length - 1)) {
      this.setFocusedOption(visibleOptions[currentIndex + 1]);
    }
  },

  scrollToOption(elOption) {
    const { offsetHeight, offsetTop } = elOption,
          { offsetHeight: parentOffsetHeight, scrollTop } = this.elements.optionContainer,
          isAbove = (offsetTop + offsetHeight) < scrollTop,
          isBelow = (offsetTop + offsetHeight) > scrollTop;

    if (isAbove) {
      this.elements.optionContainer.scrollTo(0, offsetTop);
    } else if (isBelow) {
      this.elements.optionContainer.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
    }
  }
};
