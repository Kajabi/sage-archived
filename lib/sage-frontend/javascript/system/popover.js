Sage.popover = (function() {
    // ==================================================
    // Variables
    // ==================================================
	
		const SELECTOR_POPOVER = 'data-js-popover';
    const TOOLTIP_TRIGGER = 'data-js-tooltip-trigger';
    const POPOVER_CONTENT = 'data-js-tooltip-content';
    const ATTRIBUTE_ARIA_EXPANDED = 'aria-expanded';
  
    // ==================================================
    // Functions
    // ==================================================
  
    function init(el) {
      el.addEventListener('click', popoverClickHandler);
      el.addEventListener('keydown', popoverKeydownHandler);
    }
  
    function unbind(el) {
      el.removeEventListener('click', popoverClickHandler);
      el.removeEventListener('keydown', popoverKeydownHandler);
    }
  
    function popoverClickHandler(evt) {
			const el = evt.target;
			const elContent = document.querySelector(`[${POPOVER_CONTENT}]`);
			
			isExpanded(el) ? close(el, elContent) : open(el, elContent);
		}
		
		function popoverKeydownHandler(evt) {
			const el = evt.target;
			const elContent = document.querySelector(`[${POPOVER_CONTENT}]`);
			
			// Enter key
			if (evt.keyCode === 13 && !isExpanded(el)) {
				open(el, elContent);
			} else if (evt.keyCode === 27) { // ESC key
				close(el, elContent);
			}
		}

		function open(el, content) {
			el.setAttribute(ATTRIBUTE_ARIA_EXPANDED, 'true');
			content.classList.add('show');
		}
	
		function close(el, content) {
			el.setAttribute(ATTRIBUTE_ARIA_EXPANDED, 'false');
			content.classList.remove('show');
		}
		
		function isExpanded(el) {
			return el.getAttribute(ATTRIBUTE_ARIA_EXPANDED) === 'true';
		}
  
    return {
      init: init
    }
  
  })();
  
