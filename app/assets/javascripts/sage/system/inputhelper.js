Sage.inputhelper = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var spcChar = /(?=.*[~`!@#$%^&*|(){}/=+-])/g;
  var numChar = /(?=[0-9])/g;


  // ==================================================
  // Functions
  // ==================================================

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


  // toggles visibility of helper window
  function toggleHint(ele, className) {
    if (ele.classList.contains(className)) {
      ele.classList.remove(className);
    } else {
      ele.classList.add(className);
    }
  }


  function inputPWEvents() {
    var helperTargets = Sage.util.nodelistToArray(document.querySelectorAll("[data-js-helper-target]"));

    helperTargets.forEach(function(helper) {
      var fieldID = helper.getAttribute("data-js-helper-target")
      var field = document.getElementById(fieldID);

      field.addEventListener("focus", function(e) {
        toggleHint(helper, "sage-input-helper--visible");
      });
      field.addEventListener("blur", function(e) {
        toggleHint(helper, "sage-input-helper--visible");
      });

      field.addEventListener("input", function(e) {
        var inputTarget = e.target,
            pwText = inputTarget.value;

        inputTarget.classList.add("sage-input--error");

        testCriteria(pwLength(pwText), "pw-hint-characters");
        testCriteria(pwSpecial(pwText), "pw-hint-symbols");
        testCriteria(pwNumber(pwText), "pw-hint-numbers");

        if (pwLength(pwText) && pwSpecial(pwText) && pwNumber(pwText)) {
          inputTarget.classList.remove("sage-input--error");
        }

        updateStrength(field.value);
      });
    });
  }


  function init() {
    if (document.querySelector("[data-js-helper-target]").length !== null) {
      inputPWEvents();
    }
  }


  return {
    init: init,
    updateStrength: updateStrength
  };

})();
