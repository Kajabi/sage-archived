
// css slide animation


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
      options: el.querySelectorAll('[data-js-sagedropdown-option]'),
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

    this.elements.search.addEventListener('keyup', function(evt) {
      // TO DO: Throttle this function
      this.setFilter(evt.target.value);
    }.bind(this), false);

    this.elements.options.forEach(function(item) {
      item.addEventListener('click', function(evt) {
        this.select(evt.currentTarget);
      }.bind(this), false);
    }, this);
  },

  toggle: function() {
    const parentClassList = this.elements.parent.classList;

    if (parentClassList.contains(this.classNames.parentActive) ) {
      parentClassList.remove(this.classNames.parentActive);
      this.buildOverlay(false);
      this.bindKeyActions(false);
      this.setKeyboardHighlight(false);
      this.setFilter('');
      this.elements.search.value = '';
    } else {
      parentClassList.add(this.classNames.parentActive);
      this.buildOverlay(true);
      this.bindKeyActions(true);
      this.setKeyboardHighlight(this.elements.options[0]);
      this.elements.search.focus();
    }
  },

  buildOverlay(bool) {
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

  setFilter: function(value) {
    this.elements.options.forEach(function(elOption) {
      if (
        !elOption.dataset.jsSagedropdownOption.length ||
        elOption.dataset.jsSagedropdownOption.toUpperCase().startsWith(value.toUpperCase())
      ) {
        elOption.classList.remove(this.classNames.optionHidden);
      } else {
        elOption.classList.add(this.classNames.optionHidden);
      }
    }, this);
  },

  select: function(elOption) {
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

  bindKeyActions(bool) {
    if (bool) {
      document.addEventListener('keyup', window.Sage.DropdownKeyListener = function fn(evt) {
        this.keyAction(evt.key);
      }.bind(this), false);
    } else {
      document.removeEventListener('keyup', window.Sage.DropdownKeyListener, false);
    }
  },

  keyAction(key) {
    switch(key) {
      case 'Escape':
        this.toggle();
      break;
      case 'Tab':
        this.toggle();
      break;
      case 'ArrowDown':
        this.keyboardHighlightDirection('down');
        break;
      case 'ArrowUp':
        this.keyboardHighlightDirection('up');
      break;
      case 'Enter':
        this.elements.options.forEach(function(elOption) {
          if (elOption.classList.contains(this.classNames.optionFocus)) {
            console.log('SELECT', elOption)
            this.select(elOption);
          }
        }, this);
      break;
    }
  },

  keyboardHighlightDirection(direction) {
    let newIndex;

    this.elements.options.forEach(function(elOption, index, optionsArray) {
      if (
        direction == 'up' &&
        elOption.classList.contains(this.classNames.optionFocus) &&
        index != 0 &&
        !this.elements.options[index - 1].classList.contains(this.classNames.optionHidden)
      ) {
        elOption.classList.remove(this.classNames.optionFocus);
        newIndex = index - 1;
      } else if (
        direction == 'down' &&
        elOption.classList.contains(this.classNames.optionFocus) &&
        index != (optionsArray.length - 1) &&
        !this.elements.options[index + 1].classList.contains(this.classNames.optionHidden)
      ) {
        elOption.classList.remove(this.classNames.optionFocus);
        newIndex = index + 1;
      }
    }, this);

    if (newIndex !== undefined) {
      this.setKeyboardHighlight(this.elements.options[newIndex]);
    }
  },

  setKeyboardHighlight(elOption) {
    if (elOption) {
      elOption.classList.add(this.classNames.optionFocus);
      this.maintainScrollVisibility(elOption);
    } else {
      this.elements.options.forEach(function(elOption) {
        elOption.classList.remove(this.classNames.optionFocus);
      }, this);
    }
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
