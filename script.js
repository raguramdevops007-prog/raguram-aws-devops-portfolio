document.addEventListener("DOMContentLoaded", function () {

    // Dynamic year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // Mobile menu
    const menuBtn =
        document.getElementById("menuBtn");

    const nav =
        document.getElementById("nav");


    if (menuBtn && nav) {

        menuBtn.addEventListener("click", function () {

            nav.classList.toggle("open");

        });


        // Close menu after clicking a link

        const navLinks =
            nav.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("open");

            });

        });

    }

});