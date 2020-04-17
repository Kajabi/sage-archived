Sage.banner = (function() {

  // ==================================================
  // Variables
  // ==================================================

  var allBanners = document.querySelectorAll('.sage-banner');


  // ==================================================
  // Functions
  // ==================================================

  // check to see if an active banner exists
  function bannerIsEnabled() {
    return document.querySelector('.sage-banner--active') !== null;
  }


  function closeBanner() {
    if (!bannerIsEnabled()) {
      console.info('no banner active');
      return;
    };
  }



  function init() {
    if (bannerIsEnabled()) {
      document.querySelector('body').classList.add('banner-active');
    }
  }


  return {
    init: init
  };

})();
