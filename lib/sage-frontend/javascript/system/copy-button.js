Sage.copyButton = (function() {

  // ==================================================
  // Variables
  // ==================================================

  const COPY_BUTTON_ATTR = '[data-js-copy-button]';


  // ==================================================
  // Functions
  // ==================================================

  function init() {
    const buttons = document.querySelectorAll(COPY_BUTTON_ATTR);

    buttons.forEach(button => {
      button.addEventListener('click', (ev) => {
        console.log('clicked to copy');
      });
    });
  }


  return {
    init: init
  };

})();
