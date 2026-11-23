// ======================================
// 1. AUTOMATIC COPYRIGHT YEAR
// ======================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ======================================
// 2. AUTOMATIC ACTIVE NAVIGATION LINK
// ======================================

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});


// ======================================
// 3. CONTACT FORM VALIDATION
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        // Check empty fields
        if (name === "" || email === "" ||
            subject === "" || message === "") {

            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "#B00020";
            return;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "#B00020";
            return;
        }

        // Check message length
        if (message.length < 10) {
            formMessage.textContent =
                "Your message must contain at least 10 characters.";

            formMessage.style.color = "#B00020";
            return;
        }

        // Display success message
        formMessage.textContent =
            "Thank you, " + name + "! Your form has been validated successfully.";

        formMessage.style.color = "#718873";

        // Clear the form
        contactForm.reset();

    });

}


// ======================================
// 4. SCROLL TO TOP BUTTON
// ======================================

// Create the button
const scrollTopButton = document.createElement("button");

scrollTopButton.textContent = "↑";
scrollTopButton.id = "scrollTopButton";
scrollTopButton.title = "Back to Top";

// Button styling
scrollTopButton.style.position = "fixed";
scrollTopButton.style.bottom = "25px";
scrollTopButton.style.right = "25px";
scrollTopButton.style.width = "45px";
scrollTopButton.style.height = "45px";
scrollTopButton.style.border = "none";
scrollTopButton.style.borderRadius = "50%";
scrollTopButton.style.backgroundColor = "#718873";
scrollTopButton.style.color = "white";
scrollTopButton.style.fontSize = "24px";
scrollTopButton.style.cursor = "pointer";
scrollTopButton.style.display = "none";
scrollTopButton.style.zIndex = "1000";

// Add button to the page
document.body.appendChild(scrollTopButton);

// Show button when scrolling
window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }

});

// Scroll back to top when clicked
scrollTopButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ======================================
// 5. SMOOTH SCROLLING
// ======================================

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId = link.getAttribute("href");

        if (targetId.length > 1) {

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});
