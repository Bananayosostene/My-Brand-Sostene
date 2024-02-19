let blog1 = document.querySelector(".blog1");
let blog2 = document.querySelector(".blog2");
let blog3 = document.querySelector(".blog3");
let blog4 = document.querySelector(".blog4");
let blog5 = document.querySelector(".blog5");
let blog6 = document.querySelector(".blog6");


blog1.addEventListener("click", () => {
  document.getElementById("more-blog1").style.display = "block";
  document.getElementById("more-blog2").style.display = "none";
  document.getElementById("more-blog3").style.display = "none";
  document.getElementById("more-blog4").style.display = "none";
  document.getElementById("more-blog5").style.display = "none";
  document.getElementById("more-blog6").style.display = "none";
});

blog2.addEventListener("click", () => {
  document.getElementById("more-blog1").style.display = "none";
  document.getElementById("more-blog2").style.display = "block";
  document.getElementById("more-blog3").style.display = "none";
  document.getElementById("more-blog4").style.display = "none";
  document.getElementById("more-blog5").style.display = "none";
  document.getElementById("more-blog6").style.display = "none";
});

blog3.addEventListener("click", () => {
  document.getElementById("more-blog1").style.display = "none";
  document.getElementById("more-blog2").style.display = "none";
  document.getElementById("more-blog3").style.display = "block";
  document.getElementById("more-blog4").style.display = "none";
  document.getElementById("more-blog5").style.display = "none";
  document.getElementById("more-blog6").style.display = "none";
});

blog4.addEventListener("click", () => {
  document.getElementById("more-blog1").style.display = "none";
  document.getElementById("more-blog2").style.display = "none";
  document.getElementById("more-blog3").style.display = "none";
  document.getElementById("more-blog4").style.display = "block";
  document.getElementById("more-blog5").style.display = "none";
  document.getElementById("more-blog6").style.display = "none";
});

blog5.addEventListener("click", () => {
  document.getElementById("more-blog1").style.display = "none";
  document.getElementById("more-blog2").style.display = "none";
  document.getElementById("more-blog3").style.display = "none";
  document.getElementById("more-blog4").style.display = "none";
  document.getElementById("more-blog5").style.display = "block";
  document.getElementById("more-blog6").style.display = "none";
});

blog6.addEventListener("click", () => {
  document.getElementById("more-blog1").style.display = "none";
  document.getElementById("more-blog2").style.display = "none";
  document.getElementById("more-blog3").style.display = "none";
  document.getElementById("more-blog4").style.display = "none";
  document.getElementById("more-blog5").style.display = "none";
  document.getElementById("more-blog6").style.display = "block";
});