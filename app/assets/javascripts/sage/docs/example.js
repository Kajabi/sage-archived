Sage.docs.example = (function() {

  // ==================================================
  // Functions
  // ==================================================

  function showHideCodeSample() {
    var codeBtn = document.querySelector('.example__expand-btn');

    codeBtn.addEventListener('click', function(e) {
      e.target.parentElement.classList.toggle('example__code--expanded');
    });
  }



  function init() {
    showHideCodeSample();
  }


  return {
    init: init
  };

})();
