Sage.popover = (function() {
    // ==================================================
    // Variables
    // ==================================================
    
    const POPOVER_WRAPPER = 'data-js-popover';
    const POPOVER_CONTENT = 'data-js-popover--content';
    const POPOVER_OVERLAY = 'data-js-popover--overlay';
    const POPOVER_TRIGGER = 'data-js-popover--trigger';
    const CLASS_POPOVER_BUTTON = 'sage-popover__button';
    const CLASS_POPOVER_OVERLAY_OPEN = 'sage-popover__overlay--is-open';
    const CLASS_POPOVER_IS_EXPANDED = 'sage-popover--is-expanded';
    const ATTRIBUTE_ARIA_EXPANDED = 'aria-expanded';
  
    // ==================================================
    // Functions
    // ==================================================
  
    function init(el) {
      el.addEventListener('keydown', popoverKeydownHandler);
      
      el.querySelector(`[${POPOVER_OVERLAY}]`).addEventListener('click', popoverOverlayClickHandler);
      el.querySelector(`[${POPOVER_TRIGGER}]`).addEventListener('click', popoverClickHandler);
    }
  
    function unbind(el) {
      el.querySelector(`[${POPOVER_TRIGGER}]`).removeEventListener('click', popoverClickHandler);
      el.removeEventListener('keydown', popoverKeydownHandler);
    }
  
    function popoverClickHandler(evt) {
      const el = evt.target;
      const parent = el.closest(`[${POPOVER_WRAPPER}]`);
      const elOverlay = parent.querySelector(`[${POPOVER_OVERLAY}]`)
      const elContent = parent.querySelector(`[${POPOVER_CONTENT}]`);
      
      console.log(el);

      if(isExpanded(el)) {
        document.body.classList.remove(CLASS_POPOVER_IS_EXPANDED);
        closePopoverPanel(el, elContent);
        closePopoverOverlay(elOverlay);
      } else {
        document.body.classList.add(CLASS_POPOVER_IS_EXPANDED);
        openPopoverPanel(el, elContent);
        openPopoverOverlay(elOverlay);
      }
    }
    
    function popoverKeydownHandler(evt) {
      const el = evt.target;
      const parent = el.closest(`[${POPOVER_WRAPPER}]`);
      const elContent = parent.querySelector(`[${POPOVER_CONTENT}]`);
      
      // Enter key
      if (evt.keyCode === 13 && !isExpanded(el)) {
        openPopoverPanel(el, elContent);
        closePopoverOverlay(elOverlay);
      } else if (evt.keyCode === 27) { // ESC key
        closePopoverPanel(el, elContent);
        openPopoverOverlay(elOverlay);
      }
    }

    function popoverOverlayClickHandler(evt) {
      const el = evt.target;
      const parent = el.closest(`[${POPOVER_WRAPPER}]`);
      const elButton = parent.querySelector(`.${CLASS_POPOVER_BUTTON}`)
      const content = parent.querySelector(`[${POPOVER_CONTENT}]`)
      
      // close the modal
      document.body.classList.remove(CLASS_POPOVER_IS_EXPANDED);
      elButton.setAttribute(ATTRIBUTE_ARIA_EXPANDED, false);
      content.classList.remove('show');
      el.classList.remove(CLASS_POPOVER_OVERLAY_OPEN);
    }

    function isExpanded(el) {
      return el.getAttribute(ATTRIBUTE_ARIA_EXPANDED) === 'true';
    }

    function openPopoverPanel(el, content) {
      el.setAttribute(ATTRIBUTE_ARIA_EXPANDED, 'true');
      content.classList.add('show');
    }
  
    function closePopoverPanel(el, content) {
      el.setAttribute(ATTRIBUTE_ARIA_EXPANDED, 'false');
      content.classList.remove('show');
    }

    function openPopoverOverlay(el) {
      el.classList.add(CLASS_POPOVER_OVERLAY_OPEN);
    }

    function closePopoverOverlay(el) {
      el.classList.remove(CLASS_POPOVER_OVERLAY_OPEN);
    }
  
    return {
      init: init,
      unbind: unbind,
    }
  
  })();
  
