window.Sage = window.Sage || {};

Sage.Dropdown = function(el) {
  this.init(el)
};

Sage.Dropdown.prototype = {
  init: function(el){
    var self = this;

    self.elements = {
      parent: el,
      field: el.querySelector('[data-js-sagedropdown-field]'),
      search: el.querySelector('[data-js-sagedropdown-search]'),
      options: el.querySelectorAll('[data-js-sagedropdown-option]'),
    };

    self.elements.field.addEventListener('click', function() {
      self.toggle();
    }, false);

    self.elements.search.addEventListener('keyup', function(evt) {
      // DO TO: Throttle this function
      self.filter(evt.target.value);
    }, false);

    self.elements.options.forEach(function(item) {
      item.addEventListener('click', function(evt) {
        self.select(evt.currentTarget);
      }, false);
    });
  },

  toggle: function() {
    var activeClass = 'sage-dropdown--active',
        parentClassList = this.elements.parent.classList;

    if (parentClassList.contains(activeClass) ) {
      parentClassList.remove(activeClass);
      this.overlay(false);
      this.clearSearch();
    } else {
      parentClassList.add(activeClass);
      this.overlay(true);
    }
  },

  overlay(show) {
    var overlayClass = 'sage-dropdown__overlay',
        self = this;

    if (show) {
      var el = document.createElement('div');
      el.className = overlayClass;
      self.elements.parent.appendChild(el);

      el.addEventListener('click', el.clickListener = function fn() {
        self.toggle()
      }, false);
    } else {
      var el = self.elements.parent.getElementsByClassName(overlayClass)[0];
      el.removeEventListener('click', el.clickListener, false);
      self.elements.parent.removeChild(el);
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

  clearSearch: function() {
    this.elements.search.value = "";
    this.filter("");
  }
};

document.querySelectorAll('[data-js-sagedropdown]').forEach(function(el) {
  new Sage.Dropdown(el);
});
