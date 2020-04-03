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
      options: el.querySelectorAll('[data-js-sagedropdown-option]'),
    };

    this.focusableElements = [
      this.elements.search,
      ...this.elements.options
    ]

    this.elements.field.addEventListener('click', function() {
      this.toggle();
    }.bind(this), false);

    this.elements.search.addEventListener('keyup', function(evt) {
      // TO DO: Throttle this function
      this.filter(evt.target.value);
    }.bind(this), false);

    this.elements.options.forEach(function(item) {
      item.addEventListener('click', function(evt) {
        this.select(evt.currentTarget);
      }.bind(this), false);
    }, this);
  },

  toggle: function() {
    var activeClass = 'sage-dropdown--active',
        parentClassList = this.elements.parent.classList;

    if (parentClassList.contains(activeClass) ) {
      parentClassList.remove(activeClass);
      this.buildOverlay(false);
      this.bindKeyActions(false);
      this.filter("");
      this.elements.search.value = "";
    } else {
      parentClassList.add(activeClass);
      this.buildOverlay(true);
      this.bindKeyActions(true);
    }
  },

  buildOverlay(bool) {
    var overlayClass = 'sage-dropdown__overlay';

    if (bool) {
      var el = document.createElement('div');
      el.className = overlayClass;
      this.elements.parent.appendChild(el);

      el.addEventListener('click', el.clickListener = function fn() {
        this.toggle()
      }.bind(this), false);
    } else {
      var el = this.elements.parent.getElementsByClassName(overlayClass)[0];
      el.removeEventListener('click', el.clickListener, false);
      this.elements.parent.removeChild(el);
    }
  },

  select: function(elOption) {
    var selectedClass = 'sage-dropdown__option--selected',
        parentClassList = this.elements.parent.classList;

    this.toggle();
    this.elements.field.value = elOption.dataset.jsSagedropdownOption;

    this.elements.options.forEach(function(elOption) {
      elOption.classList.remove(selectedClass);
    });

    if (elOption.dataset.jsSagedropdownOption.length) {
      parentClassList.add(selectedClass);
      elOption.classList.add(selectedClass);
    } else {
      parentClassList.remove(selectedClass);
    }
  },

  filter: function(value) {
    var hiddenClass = 'sage-dropdown__option--hidden';

    this.elements.options.forEach(function(elOption) {
      if (
        !elOption.dataset.jsSagedropdownOption.length ||
        elOption.dataset.jsSagedropdownOption.toUpperCase().startsWith(value.toUpperCase())
      ) {
        elOption.classList.remove(hiddenClass);
      } else {
        elOption.classList.add(hiddenClass);
      }
    });
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
    // Need to know which focus is happening here

    switch(key) {
      case "Escape" || "Tab":
        this.toggle();
      break;
      case "ArrowDown":
        this.focus("down");
        break;
      case "ArrowUp":
        this.focus("up");
      break;
      case "Enter":
        // this.toggle();
      break;
    }
  },

  focus(direction) {
    var focusClass = "FOCUS",
        newIndex;

    this.focusableElements.forEach(function(elOption, index, focusableElements) {
      if (
        direction == "up" &&
        elOption.classList.contains(focusClass) &&
        index != 0
      ) {
        elOption.classList.remove(focusClass);
        newIndex = index - 1;
      } else if (
        direction == "down" &&
        elOption.classList.contains(focusClass) &&
        index != (focusableElements.length - 1)
      ) {
        elOption.classList.remove(focusClass);
        newIndex = index + 1;
      }
    });

    if (newIndex !== undefined) {
      console.log(newIndex, this.focusableElements[newIndex].classList)
      this.focusableElements[newIndex].classList.add(focusClass);
    }
  }
};

document.querySelectorAll('[data-js-sagedropdown]').forEach(function(el) {
  new Sage.Dropdown(el);
});
