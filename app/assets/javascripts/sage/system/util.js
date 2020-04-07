Sage.util = (function(Sage) {

  // retrieve button target from aria-controls or data attribute
  function getBtnTarget(e) {
    return e.target.getAttribute('aria-controls') ? e.target.getAttribute('aria-controls') : e.target.getAttribute('data-js-menu');
  }


  return {
    getBtnTarget: getBtnTarget
  };

})(Sage);
