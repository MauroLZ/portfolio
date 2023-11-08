
$(document).ready(function() {
    $(".mobile-menu-button").click(function() {
        $(".mobile-menu").toggleClass("active");
    });

    $(".mobile-menu_link").click(function() {
        $(".mobile-menu").removeClass("active");
    });

    $(".close-button").click(function() {
        $(".mobile-menu").removeClass("active");
    });
});

// Get references to the navigation links and the mobile menu links
const navLinks = document.querySelectorAll("header ul li a");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu ul li a");

// Function to scroll to the start of a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Calculate the exact position by subtracting the height of the header
        const headerHeight = document.querySelector("header").offsetHeight;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
            top: sectionTop,
            behavior: "smooth"
        });
    }
}

// Add event listeners to the navigation links
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute("href").substring(1); // Remove the '#' character
        scrollToSection(sectionId);
    });
});

// Add event listeners to the mobile menu links
mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute("href").substring(1); // Remove the '#' character
        scrollToSection(sectionId);
    });
});

