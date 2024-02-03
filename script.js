let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

document.getElementById("menu").addEventListener("click", function () {
  this.classList.toggle("fa-times");
  document.querySelector(".navbar").classList.toggle("nav-toggle");
});

window.addEventListener("scroll", function () {
  document.getElementById("menu").classList.remove("fa-times");
  document.querySelector(".navbar").classList.remove("nav-toggle");
});
