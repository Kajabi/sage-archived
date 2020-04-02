window.Sage = window.Sage || {};

Sage.Dropdown = function(el) {
  this.init(el)
};

Sage.Dropdown.prototype = {
  init: function(el){
    var self = this;

    self.elements = {
      parent: el,
      field: el.querySelector('[data-js-sageselect-field]'),
      options: el.querySelectorAll('[data-js-sageselect-option]'),
    };

    self.elements.field.addEventListener('click', function() {
      self.toggle()
    }, false);

    self.elements.options.forEach(function(item) {
      item.addEventListener('click', function(evt) {
        self.select(evt.currentTarget);
      }, false);
    });
  },

  toggle: function() {
    var activeClass = 'sage-select--active',
        parentClassList = this.elements.parent.classList;

    if (parentClassList.contains(activeClass) ) {
      parentClassList.remove(activeClass);
    } else {
      parentClassList.add(activeClass);
    }
  },

  select: function(option) {
    var value = option.dataset.jsSageselectOption,
        selectedClass = 'sage-select--selected',
        parentClassList = this.elements.parent.classList;

    this.toggle();
    this.elements.field.value = value;

    if (option.dataset.jsSageselectOption.length) {
      parentClassList.add(selectedClass);
    } else {
      parentClassList.remove(selectedClass);
    }
  }
};

document.querySelectorAll('[data-js-sageselect]').forEach(function(el) {
    new Sage.Dropdown(el);
});
