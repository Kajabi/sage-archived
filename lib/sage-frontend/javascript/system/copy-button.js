Sage.copyButton = (function() {

  // ==================================================
  // Variables
  // ==================================================

  const COPY_BUTTON_ATTR = '[data-js-copy-button]';

  function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.setAttribute('class', 'visually-hidden');
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };


  // ==================================================
  // Functions
  // ==================================================

  function init() {
    const buttons = document.querySelectorAll(COPY_BUTTON_ATTR);

    buttons.forEach(button => {
      button.addEventListener('click', (ev) => {
        copyToClipboard(ev.currentTarget.dataset.jsCopyButton);
      });
    });
  }


  return {
    init: init
  };

})();
