window.Sage = window.Sage || {};

Sage.Dropdown = function(el) {
  this.init(el)
};

Sage.Dropdown.prototype = {
  init: function(el){
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
      overlay: 'sage-dropdown__overlay',
    }

    this.elements.field.addEventListener('click', function() {
      this.toggle();
    }.bind(this), false);

    this.elements.options.forEach(function(item) {
      item.addEventListener('click', function(evt) {
        this.setSelectedOption(evt.currentTarget);
      }.bind(this), false);
    }, this);
  },

  toggle: function() {
    let parentClassList = this.elements.parent.classList;

    if (parentClassList.contains(this.classNames.parentActive) ) {
      parentClassList.remove(this.classNames.parentActive);
      this.clickOverlay(false);
      this.bindKeyboardListener(false);
      this.setFocusedOption(false);
      this.filter('');
      this.elements.search.value = '';
    } else {
      parentClassList.add(this.classNames.parentActive);
      this.clickOverlay(true);
      this.bindKeyboardListener(true);
      this.setFocusedOption(this.elements.options[0]);
      this.elements.search.focus();
    }
  },

  bindKeyboardListener(bool) {
    if (bool) {
      document.addEventListener('keyup', window.Sage.DropdownKeyboardListener = function fn(evt) {
        this.keyAction(evt);
      }.bind(this), false);
    } else {
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

  setFocusedOption(elOption){
    let removeAllFocused = () => this.elements.options.forEach(elOption =>
      elOption.classList.remove(this.classNames.optionFocus)
    );

    if (elOption) {
      removeAllFocused();
      elOption.classList.add(this.classNames.optionFocus);
      this.maintainScrollVisibility(elOption);
    } else if (elOption === false) {
      removeAllFocused();
    }
  },

  setSelectedOption: function(elOption) {
    const parentClassList = this.elements.parent.classList;

    this.toggle();
    this.elements.field.value = elOption.dataset.jsSagedropdownOption;

    this.elements.options.forEach(function(elOption) {
      elOption.classList.remove(this.classNames.optionSelected);
    }, this);

    if (elOption.dataset.jsSagedropdownOption.length) {
      parentClassList.add(this.classNames.parentSelected);
      elOption.classList.add(this.classNames.optionSelected);
    } else {
      parentClassList.remove(this.classNames.parentSelected);
    }
  },

  // -----------------------------

  clickOverlay(bool) {
    if (bool) {
      const el = document.createElement('div');
      el.className = this.classNames.overlay;
      this.elements.parent.appendChild(el);

      el.addEventListener('click', el.clickListener = function fn() {
        this.toggle()
      }.bind(this), false);
    } else {
      var el = this.elements.parent.getElementsByClassName(this.classNames.overlay)[0];
      el.removeEventListener('click', el.clickListener, false);
      this.elements.parent.removeChild(el);
    }
  },

  filter: function(value) {
    this.elements.options.forEach(function(elOption, index) {
      if (
        !elOption.dataset.jsSagedropdownOption.length ||
        elOption.dataset.jsSagedropdownOption.toUpperCase().startsWith(value.toUpperCase())
      ) {
        elOption.classList.remove(this.classNames.optionHidden);
      } else {
        elOption.classList.add(this.classNames.optionHidden);
      }
    }, this);

    this.setFocusedOption(this.getVisibleOptions()[0]);
  },

  keyAction(evt) {
    switch(evt.key) {
      case 'Escape':
        evt.preventDefault();
        this.toggle();
      break;
      case 'Tab':
        this.toggle();
      break;
      case 'ArrowDown':
        evt.preventDefault();
        this.keyboardFocusDirection('down');
        break;
      case 'ArrowUp':
        evt.preventDefault();
        this.keyboardFocusDirection('up');
      break;
      case 'Enter':
        evt.preventDefault();
        this.setSelectedOption(this.getFocusedOption());
      break;
      default:
        this.filter(this.elements.search.value);
      break;
    }
  },

  keyboardFocusDirection(direction) {
    const visibleOptions = this.getVisibleOptions();
    const focusedOption = this.getFocusedOption();
    let newIndex;

    visibleOptions.forEach(function(elOption, index, optionsArray) {
      if (
        direction == 'up' &&
        elOption == focusedOption &&
        index != 0
      ) {
        newIndex = index - 1;
      } else if (
        direction == 'down' &&
        elOption == focusedOption &&
        index != (optionsArray.length - 1)
      ) {
        newIndex = index + 1;
      }
    }, this);

    if (newIndex != undefined) this.setFocusedOption(visibleOptions[newIndex]);
  },

  maintainScrollVisibility(elOption) {
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

document.querySelectorAll('[data-js-sagedropdown]').forEach(function(el) {
  new Sage.Dropdown(el);
});
