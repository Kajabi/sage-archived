Sage.inputhelper = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var spcChar = /(?=.*[~`!@#$%^&*|(){}/=+-])/g;
  var numChar = /(?=[0-9])/g;

  var visibleHintClass = "sage-input-helper--visible";
  var passingClass = "sage-hint__list-item--success";
  var inputErrorClass = "sage-input--error";


  // ==================================================
  // Functions
  // ==================================================

  // update strength level of password
  function updatePWStrength(inputValue, meter) {
    if (typeof zxcvbn !== "undefined") {
      meter.value = zxcvbn(inputValue).score;
      // console.info(meter.value);
    } else {
      meter.closest(".sage-meter").style.opacity = "0";
    }
  }

  // check for special characters
  function pwSpecial(str, num) {
    if (num == 0) return true;
    return spcChar.test(str);
  }

  // check for numbers
  function pwNumber(str, num) {
    if (num == 0) return true;
    return numChar.test(str);
  }

  // check for password length
  function pwLength(str, num) {
    if (num === 0) return true;
    return str.length >= num;
  }

  function checkRequirements(ele, reqs) {
    var val = ele.value;
    var metChar = false;
    var metSym = false;
    var metNum = false;

    reqs.forEach(function(item) {
      if (item.type === "characters") {
        metChar = updateCriteria(pwLength(val, item.minValue), item.id);
      } else if (item.type === "symbols") {
        metSym = updateCriteria(pwSpecial(val, item.minValue), item.id);
      } else if (item.type === "numbers") {
        metNum = updateCriteria(pwNumber(val, item.minValue), item.id);
      }
    });

    if (metChar && metSym && metNum) {
      ele.parentElement.classList.remove(inputErrorClass);
    }
  }

  // toggles item criteria
  function updateCriteria(bool, itemID) {
    var criteria = document.getElementById(itemID);

    if (bool === true ) {
      criteria.classList.add(passingClass);
      return true;
    } else {
      criteria.classList.remove(passingClass);
      return false;
    }
  }


  // toggles visibility of helper window
  function toggleHintIE(ele, className) {
    if (ele.classList.contains(className)) {
      ele.classList.remove(className);
    } else {
      ele.classList.add(className);
    }
  }


  // trigger classes for active state in IE
  function focusBlurIE(field) {
    field.addEventListener("focus", function(e) {
      toggleHintIE(helper, visibleHintClass);
    });
    field.addEventListener("blur", function(e) {
      toggleHintIE(helper, visibleHintClass);
    });
  }


  // bind events related to each input helper for passwords
  function bindPWEvents(helper) {
    var fieldID = helper.getAttribute("data-js-helper-target"),
        field = document.getElementById(fieldID);

    var helperList = Sage.util.nodelistToArray(helper.querySelectorAll(".sage-hint__list-item")),
        helperReqItems = helperList.map(function(ele) {
          return {
            id: ele.id,
            type: ele.getAttribute("data-js-hint-type") || null,
            minValue: ele.getAttribute("data-js-hint-min") || 0
          }
        });

    var meter = helper.querySelector(".sage-meter__bar");

    if (Sage.util.isIE()) {
      focusBlurIE(field);
    }

    field.addEventListener("input", function(e) {
      var targetField = e.target,
          fieldParent = e.target.parentElement;

      // add error state
      fieldParent.classList.add(inputErrorClass);

      checkRequirements(targetField, helperReqItems);
      updatePWStrength(targetField.value, meter);
    });
  }


  function init() {
    if (document.querySelector("[data-js-helper-target]") !== null) {
      var helperTargets = Sage.util.nodelistToArray(document.querySelectorAll("[data-js-helper-target]"));

      helperTargets.forEach(function(helper) {
        bindPWEvents(helper);
      });
    }
  }


  return {
    init: init,
    updatePWStrength: updatePWStrength
  };

})();
