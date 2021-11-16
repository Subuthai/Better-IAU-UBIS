//Sidebar Hover

var interaction = true;
function sidebarInteraction() {
  if (interaction) {
    document.getElementById("sidebar").style.width = "320px";
    document.getElementById("container").style.marginLeft = "320px";
    this.interaction = false;
  } else {
    document.getElementById("sidebar").style.width = "85px";
    document.getElementById("container").style.marginLeft = "85px";
    this.interaction = true;
  }
}

//Info Button

window.onload = function () {
  var infoBox = document.getElementById("infoBox");
  var infoButton = document.getElementById("infoButton");
  var infoCloseBtn = document.getElementsByClassName("close")[0];

  infoButton.onclick = function () {
    infoBox.style.display = "block";
  };
  infoCloseBtn.onclick = function () {
    infoBox.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == infoBox) {
      infoBox.style.display = "none";
    }
  };
};
