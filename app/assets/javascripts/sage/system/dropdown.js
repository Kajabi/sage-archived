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
    if (bool) {
      document.addEventListener('keydown', window.Sage.DropdownKeyListener = function fn(evt) {
        this.keyAction(evt.key);
      }.bind(this), false);
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
