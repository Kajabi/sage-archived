Sage.popover = (function() {
    // ==================================================
    // Variables
    // ==================================================
	
		const POPOVER_CONTENT = 'data-js-tooltip-content';
		const POPOVER_OVERLAY = 'data-js-tooltip-overlay';
		const POPOVER_TRIGGER = 'data-js-popover--trigger';
		const CLASS_POPOVER_OVERLAY_OPEN = 'sage-popover__overlay--is-open'
    const ATTRIBUTE_ARIA_EXPANDED = 'aria-expanded';
  
    // ==================================================
    // Functions
    // ==================================================
  
    function init(el) {
			el.addEventListener('click', popoverOverlayClickHandler);
			el.addEventListener('keydown', popoverKeydownHandler);
			
			el.querySelector(`[${POPOVER_TRIGGER}]`).addEventListener('click', popoverClickHandler);
    }
  
    function unbind(el) {
			el.querySelector(`[${POPOVER_TRIGGER}]`).removeEventListener('click', popoverClickHandler);
      el.removeEventListener('keydown', popoverKeydownHandler);
    }
  
    function popoverClickHandler(evt) {
			const el = evt.target;
			const elOverlay = document.querySelector(`[${POPOVER_OVERLAY}]`)
			const elContent = document.querySelector(`[${POPOVER_CONTENT}]`);
			
			// isExpanded(el) ? close(el, elContent) : open(el, elContent);
			if(isExpanded(el)) {
				close(el, elContent);
				closePopoverOverlay(elOverlay);
			} else {
				open(el, elContent);
				openPopoverOverlay(elOverlay);
			}
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

		function popoverOverlayClickHandler(evt) {
			const el = evt.target;
			const elOverlay = document.querySelector(`[${POPOVER_OVERLAY}]`)

			console.log(el);
			// console.log(elOverlay);
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
  
