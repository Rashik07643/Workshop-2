const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('open'); 

    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);

    menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});

const scrollBar = document.createElement('div');
scrollBar.id = 'scroll-progress';
document.body.prepend(scrollBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const pageHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / pageHeight) * 100;

    scrollBar.style.width = scrollPercentage + "%";
});

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm && formMessage) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop page refresh

        const nameField = document.getElementById('name').value.trim();
        const emailField = document.getElementById('email').value.trim();

        if (nameField === "" || emailField === "") {
            formMessage.textContent = "❗ Please fill out all required fields.";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "✔ Thank you! Your message has been sent.";
            formMessage.style.color = "green";
            contactForm.reset();
        }
    });
}
