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
  function updatePWStrength(inputValue, meter) {
    if (typeof zxcvbn !== "undefined") {
      meter.value = zxcvbn(inputValue).score;
      console.info(meter.value);
    } else {
      meter.closest(".sage-meter").style.opacity = "0";
    }
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
  function testCriteria(obj) {
    console.info(obj);
    // var passed = document.querySelector(ele.getAttribute(attribute));

    // if (bool === true ) {
    //   passed.classList.add("passed");
    // } else {
    //   passed.classList.remove("passed");
    // }
  }


  // toggles visibility of helper window
  function toggleHint(ele, className) {
    if (ele.classList.contains(className)) {
      ele.classList.remove(className);
    } else {
      ele.classList.add(className);
    }
  }


  // trigger classes for active state in IE
  function focusBlurIE(field) {
    field.addEventListener("focus", function(e) {
      toggleHint(helper, "sage-input-helper--visible");
    });
    field.addEventListener("blur", function(e) {
      toggleHint(helper, "sage-input-helper--visible");
    });
  }


  function helperEvents(helper) {
    var fieldID = helper.getAttribute("data-js-helper-target");
    var field = document.getElementById(fieldID);
    var meter = helper.querySelector(".sage-meter__bar");

    var helperList = Sage.util.nodelistToArray(helper.querySelectorAll(".sage-hint__list-item"));
    var helperReq = helperList.map(function(ele) {
      return {
        type: ele.getAttribute("data-js-hint-type") || null,
        minValue: ele.getAttribute("data-js-hint-min") || 0
      }
    });

    console.info('helperReq', helperReq);

    if (Sage.util.isIE) {
      focusBlurIE(field);
    }

    field.addEventListener("input", function(e) {
      var targetField = e.target;

      // add error state
      targetField.classList.add("sage-input--error");

      // targetObj.type === "characters" ? testCriteria(pwLength(targetObj)) : null;
      // targetObj.type === "symbols" ? testCriteria(pwSpecial(targetObj)) : null;
      // targetObj.type === "numbers" ? testCriteria(pwNumber(targetObj)) : null;

      // if (pwLength(targetObj.text) && pwSpecial(targetObj.text) && pwNumber(targetObj.text)) {
      //   targetObj.classList.remove("sage-input--error");
      // }

      updatePWStrength(targetField.value, meter);
    });
  }


  function init() {
    if (document.querySelector("[data-js-helper-target]").length !== null) {
      var helperTargets = Sage.util.nodelistToArray(document.querySelectorAll("[data-js-helper-target]"));

      helperTargets.forEach(function(helper) {
        helperEvents(helper);
      });
    }
  }


  return {
    init: init,
    updatePWStrength: updatePWStrength
  };

})();
