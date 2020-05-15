Sage.meter = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var meter = Sage.util.nodelistToArray(document.querySelectorAll('.sage-meter'));

  // ==================================================
  // Functions
  // ==================================================

  function updateMeterValues(ele) {
    var meter = document.querySelector('[js-meter-type="password"]');

    console.info('current', getCurrentValue(meter));
    console.info('optimum', attributeValue(meter, "optimum"));
    console.info('min', attributeValue(meter, "min"));
    console.info('max', attributeValue(meter, "max"));
  }

  function attributeValue(ele, attributeName) {
    return ele.hasAttribute(attributeName) ? ele.getAttribute(attributeName) : 0;
  }

  function getCurrentValue(ele) {
    return ele.value;
  }


  function bindEvents() {

  }


  function init() {
    if (document.querySelector('[js-meter-type="password"]') !== null) {
      updateMeterValues();
      bindEvents();
    }
  }

  return {
    init: init,
    updateMeter: updateMeterValues
  };

})();
