Sage.gridDemo = (() => {
  /*
    This is an example template. To create a module:
    1. Duplicate or copy this structure
    2. Rename `Sage.module` above to your module name
    3. Import (require) the module in `sage_system.js`
    4. When applicable, initialize in `init.js`
  */

  // ==================================================
  // Variables
  // ==================================================


  // ==================================================
  // Functions
  // ==================================================

  /*
    Add functions here that should run when this module
    is initialized in `init.js`: event handlers, etc.
  */
  function init(el) {
    const grid = el;
    console.log('init grid demo');
    window.addEventListener('resize', reportSizes);
  }

  function unbind(el) {
    const grid = el;
    window.removEventListener('resize', reportSizes)
  }

  function reportSizes(e) {
    console.log(e, window.innerWidth, window.innerHeight);
    document.querySelectorAll('.slot').forEach((slot) => {
      slot.innerHTML = slot.offsetWidth + 'px';
    })
  }


  /*
    Functions declared above are considered "private" and
    not exposed to the global `window` object. To allow a
    function to be "public" and usable in other modules,
    return them below. See `util.js` for examples.
  */
  return {
    init,
    unbind
  };

})();
