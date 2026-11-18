const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const menuIsOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", menuIsOpen);
});


document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


document.getElementById("year").textContent = new Date().getFullYear();
