

const leftPanel = document.querySelector(".side");
const rightPanel = document.querySelector(".right-panel");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

function toggleLeftPanel() {
  leftPanel.style.width = "0%";
  rightPanel.style.width = "100%";
  left.style.display = "none";
  right.style.display = "flex";
}
function toggleRightPanel() {
  leftPanel.style.width = "20%";
  rightPanel.style.width = "80%";
  right.style.display = "none";
  left.style.display = "flex";
}
