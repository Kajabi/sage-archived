Sage.banner = (function() {

  // ==================================================
  // Variables
  // ==================================================

  var bannerClass = ".sage-banner--active";
  var bodyClass = "banner-active";

  var activeBanner = document.querySelector(bannerClass);
  var bannerCloseBtn = activeBanner.querySelector('.sage-banner__close');


  // ==================================================
  // Functions
  // ==================================================

  // check to see if an active banner exists
  function bannerIsEnabled() {
    return document.querySelector(bannerClass) !== null;
  }

  function toggleBodyBanner(bodyClass) {
    document.querySelector('body').classList.toggle(bodyClass);
  }

  function bindEvents() {
    bannerCloseBtn.addEventListener('click', function(e) {
      e.target.parentElement.classList.toggle('sage-banner--active');
      toggleBodyBanner(bodyClass);
    });
  }



  function init() {
    if (bannerIsEnabled()) {
      document.querySelector('body').classList.add(bodyClass);

      bindEvents();
    }
  }


  return {
    init: init,
    bannerIsEnabled: bannerIsEnabled
  };

})();
