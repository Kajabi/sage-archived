Sage.alert = (function () {
  // ==================================================
  // Variables
  // ==================================================

  var alertCloseBtns = Sage.util.nodelistToArray(document.querySelectorAll(".sage-alert__close"));

  // ==================================================
  // Functions
  // ==================================================

  function hideAlert(alert) {
    // waits for animation to complete before hiding the alert
    alert.addEventListener("transitionend", function() {
      alert.setAttribute("hidden", true);
    });
  }

  function bindEvents() {
    alertCloseBtns.forEach(function(btn) {
      var alert = btn.closest(".sage-alert");

      btn.addEventListener("click", function() {
        alert.classList.add('sage-alert--hidden');
        window.requestAnimationFrame(function() {
          hideAlert(alert);
        });
      });
    });
  }

  function init() {
    bindEvents();
  }

  return {
    init: init,
  };
})();
