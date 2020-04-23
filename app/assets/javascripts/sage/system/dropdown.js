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
      parentSelected: 'sage-dropdown--selected',
      parentActive: 'sage-dropdown--active',
      optionSelected: 'sage-dropdown__option--selected',
      optionHidden: 'sage-dropdown__option--hidden',
      optionFocus: 'sage-dropdown__option--focused',
    }

    this.htmlInit();

    this.elements.field.addEventListener('click', () => {
      if (this.elements.search == document.activeElement) {
        this.elements.search.blur()
      } else {
        this.elements.search.active()
      }
    });

    this.elements.search.addEventListener('blur', () => this.showDropdown(false));
    this.elements.search.addEventListener('focus', () => this.showDropdown(true));

    this.elements.options.forEach(item => {
      item.addEventListener('click', (evt) => {
        this.showDropdown(false);
      });
    });
  },

  htmlInit() {
    this.elements.search.setAttribute("tabIndex", 0);
    this.elements.field.setAttribute("tabIndex", -1);
    this.elements.field.setAttribute("readonly", true);
  },

  showDropdown(show) {
    const parentClassList = this.elements.parent.classList;

    if (show) {
      parentClassList.add(this.classNames.parentActive);
      this.setFocusedOption(this.getSelectedOption() || this.elements.options[0]);

      document.addEventListener('keyup', window.Sage.DropdownKeyboardListener = function fn(evt) {
        evt.preventDefault();
        this.keyAction(evt);
    }.bind(this), false);

    } else {
      parentClassList.remove(this.classNames.parentActive);
      this.filter('');
      this.elements.search.value = '';

      document.removeEventListener('keyup', window.Sage.DropdownKeyboardListener, false);
    }
  },

  // GETTERS & SETTERS -----------

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
      parentClassList.add(this.classNames.parentSelected);
      elOption.classList.add(this.classNames.optionSelected);
    } else {
      parentClassList.remove(this.classNames.parentSelected);
    }
  },

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
        this.showDropdown(false);
      break;
      case 'ArrowDown':
        this.keyboardFocusDirection('down');
        break;
      case 'ArrowUp':
        this.keyboardFocusDirection('up');
      break;
      case 'Enter':
        this.setSelectedOption(this.getFocusedOption());
        this.showDropdown(false);
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
