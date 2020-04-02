window.Sage = window.Sage || {};

Sage.Dropdown = function(el) {
  this.init(el)
};

Sage.Dropdown.prototype = {
  init: function(el){
    var _this = this;

    _this.elements = {
      parent: el,
      field: el.querySelector('[data-js-sagedropdown-field]'),
      search: el.querySelector('[data-js-sagedropdown-search]'),
      options: el.querySelectorAll('[data-js-sagedropdown-option]'),
    };

    _this.elements.field.addEventListener('click', function() {
      _this.toggle();
    }, false);

    _this.elements.search.addEventListener('keyup', function(evt) {
      // DO TO: Throttle this function
      _this.filter(evt.target.value);
    }, false);

    _this.elements.options.forEach(function(item) {
      item.addEventListener('click', function(evt) {
        _this.select(evt.currentTarget);
      }, false);
    });
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
    var overlayClass = 'sage-dropdown__overlay',
        _this = this;

    if (bool) {
      var el = document.createElement('div');
      el.className = overlayClass;
      _this.elements.parent.appendChild(el);

      el.addEventListener('click', el.clickListener = function fn() {
        _this.toggle()
      }, false);
    } else {
      var el = _this.elements.parent.getElementsByClassName(overlayClass)[0];
      el.removeEventListener('click', el.clickListener, false);
      _this.elements.parent.removeChild(el);
    }
  },

  select: function(elOption) {
    var value = elOption.dataset.jsSagedropdownOption,
        selectedClass = 'sage-dropdown--selected',
        parentClassList = this.elements.parent.classList;

    this.toggle();
    this.elements.field.value = value;

    this.elements.options.forEach(function(elOption) {
      elOption.classList.remove('sage-dropdown__option--active');
    });

    if (elOption.dataset.jsSagedropdownOption.length) {
      parentClassList.add(selectedClass);
      elOption.classList.add('sage-dropdown__option--active');
    } else {
      parentClassList.remove(selectedClass);
    }
  },

  filter: function(value) {
    this.elements.options.forEach(function(elOption) {
      if (
        !elOption.dataset.jsSagedropdownOption.length ||
        elOption.dataset.jsSagedropdownOption.toUpperCase().startsWith(value.toUpperCase())
      ) {
        elOption.classList.remove('sage-dropdown__option--hidden');
      } else {
        elOption.classList.add('sage-dropdown__option--hidden');
      }
    });
  },

  bindKeyActions(bool) {
    var _this = this;

    if (bool) {
      document.addEventListener('keydown', window.Sage.DropdownKeyListener = function fn(evt) {
        _this.keyAction(evt.key);
      }, false);
    } else {
      document.removeEventListener('keydown', window.Sage.DropdownKeyListener, false);
    }
  },

  keyAction(key) {
    // Need to know which focus is happening here

    switch(key) {
      case "Escape" || "Tab":
        this.toggle();
      break;
      case "ArrowDown":
        // this.toggle();
      break;
      case "ArrowUp":
        // this.toggle();
      break;
      case "Enter":
        // this.toggle();
      break;
    }
  }
};

document.querySelectorAll('[data-js-sagedropdown]').forEach(function(el) {
  new Sage.Dropdown(el);
});
