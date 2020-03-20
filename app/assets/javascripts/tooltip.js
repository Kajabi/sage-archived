window.sage = window.sage || {};

sage.Tooltip = function() {
  
  document.querySelectorAll("[data-tooltip]").forEach(item => {
    item.addEventListener("mouseover", e => {
      if (!e.target.hasAttribute("data-tooltip")) return;
      var pos = e.target.getAttribute("data-position") || "top";
      var tooltip = document.createElement("div");
      tooltip.className = "sage-tooltip";
      tooltip.innerHTML = e.target.getAttribute("data-tooltip");
      tooltip.theme = e.target.getAttribute("data-tooltip-theme");
      tooltip.position = e.target.getAttribute("data-position");
      tooltip.classList.add("sage-tooltip--" + tooltip.theme);

      document.body.appendChild(tooltip);
      positionTooltip(e.target, tooltip, pos);
    });

    item.addEventListener("mouseout", e => {
      if (e.target.hasAttribute("data-tooltip")) {
        setTimeout(function() {
          document.body.removeChild(document.querySelector(".sage-tooltip"));
        }, 0);
      }
    });
  });

  function positionTooltip(parent, tooltip, position) {
    var parentCoords = parent.getBoundingClientRect(),
      dist = 8,
      left,
      top;

    switch (position) {
      case "left":
        top = (parseInt(parentCoords.top) + parseInt(parentCoords.bottom)) / 2 - tooltip.offsetHeight / 2;
        left = parseInt(parentCoords.left) - dist - tooltip.offsetWidth;
        if (parseInt(parentCoords.left) - tooltip.offsetWidth < 0) {
          left = dist;
        }
        break;
      case "right":
        top = (parseInt(parentCoords.top) + parseInt(parentCoords.bottom)) / 2 - tooltip.offsetHeight / 2;
        left = parentCoords.right + dist;
        if (parseInt(parentCoords.right) + tooltip.offsetWidth > document.documentElement.clientWidth) {
          left =  document.documentElement.clientWidth - tooltip.offsetWidth - dist;
        }
        break;
      case "bottom":
        top = parseInt(parentCoords.bottom) + dist;
        left = parseInt(parentCoords.left) + (parent.offsetWidth - tooltip.offsetWidth) / 2;
        break;
      default:
      case "top":
        top = parseInt(parentCoords.top) - tooltip.offsetHeight - dist;
        left = parseInt(parentCoords.left) + (parent.offsetWidth - tooltip.offsetWidth) / 2;
    }

    tooltip.style.left = left + "px";
    tooltip.style.top = top + pageYOffset + "px";
    tooltip.classList.add("sage-tooltip-" + position);
  }
};

var tooltip = new sage.Tooltip();
