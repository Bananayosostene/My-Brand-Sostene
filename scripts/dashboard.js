const leftPanel = document.querySelector(".left-panel");
const rightPanel = document.querySelector(".right-panel");
const left = document.getElementById("left");
const right = document.getElementById("right");

function toggleLeftPanel() {
  leftPanel.style.width = "4%";
  rightPanel.style.width = "96%";
  left.style.display = "none";
  right.style.display = "flex";
}
function toggleRightPanel() {
  leftPanel.style.width = "20%";
  rightPanel.style.width = "80%";
  right.style.display = "none";
  left.style.display = "flex";
}

// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Initial load (default page)
  navigate("dashboard");

  // Event listeners for sidebar buttons
  document
    .querySelector(".sidebar-btn-dashboard")
    .addEventListener("click", function () {
      navigate("dashboard");
    });

  document
    .querySelector(".sidebar-btn-blog")
    .addEventListener("click", function () {
      navigate("blog");
    });

  document
    .querySelector(".sidebar-btn-messages")
    .addEventListener("click", function () {
      navigate("messages");
    });
});

function navigate(page) {
  // Hide all sections
  document.getElementById("dashboard-content").style.display = "none";
  document.getElementById("blog-content").style.display = "none";
  document.getElementById("messages-content").style.display = "none";
  document.getElementById(`${page}-content`).style.display = "block";
}
