Sage.inputgroup = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var spcChar = /(?=.*[~`!@#$%^&*|(){}/=+-])/g;
  var numChar = /(?=[0-9])/g;


  // ==================================================
  // Functions
  // ==================================================

  function togglePasswordDisplay(evt) {
    var parentEle = evt.target.parentElement,
       field = parentEle.querySelector(".sage-input__field");

    if (field.type === "password") {
      field.type = "text";
    } else {
      field.type = "password";
    }

    field.focus();
  }

  // update strength level of password
  function updateStrength(inputValue) {
    var meter = document.getElementById("pw-hint-strength");
    meter.value = zxcvbn(inputValue).score;
    // console.info(meter.value);
  }

  // check for special characters
  function pwSpecial(str) {
    return spcChar.test(str);
  }

  // check for numbers
  function pwNumber(str) {
    return numChar.test(str);
  }

  // check for length
  function pwLength(str) {
    return str.length >= 8;
  }

  // toggles item criteria
  function testCriteria(bool, eleID) {
    var passed = document.getElementById(eleID);

    if (bool === true ) {
      passed.classList.add("passed");
    } else {
      passed.classList.remove("passed");
    }
  }


  function bindPWEvents() {
    var pwShowBtn = Sage.util.nodelistToArray(document.querySelectorAll("[data-js-mask='password']"));
    var pwField = document.getElementById("input-group-password");

    // show/hide password text; assumes multiple password fields
    pwShowBtn.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        togglePasswordDisplay(e);
      });
    });


    pwField.addEventListener("input", function(e) {
      var inputContainer = e.target.parentElement,
          pwText = pwField.value;

      inputContainer.classList.add("sage-input--error");

      // testCriteria(pwLength(pwText), "pw-hint-characters");
      // testCriteria(pwSpecial(pwText), "pw-hint-symbols");
      // testCriteria(pwNumber(pwText), "pw-hint-numbers");

      // if (pwLength(pwText) && pwSpecial(pwText) && pwNumber(pwText)) {
      //   inputContainer.classList.remove("sage-input--error");
      // }

      // updateStrength(pwField.value);
    });
  }


  function init() {
    if (document.querySelector(".sage-input-group__toggle").length !== null) {
      bindPWEvents();
    }
  }


  return {
    init: init
  };

})();
