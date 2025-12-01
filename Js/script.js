// Mobile menu toggle
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('open');

    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.textContent = isExpanded ? '✕' : '☰';
}

if (menuButton && navLinks) {
    menuButton.addEventListener('click', toggleMenu);

    // Close menu when clicking a link (mobile UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
}

// Scroll progress bar
const scrollBar = document.createElement('div');
scrollBar.id = 'scroll-progress';
document.body.prepend(scrollBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const pageHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;
    scrollBar.style.width = scrollPercentage + '%';
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm && formMessage) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // stop page refresh

        const nameField = document.getElementById('name').value.trim();
        const emailField = document.getElementById('email').value.trim();

        if (!nameField || !emailField) {
            formMessage.textContent = 'Please fill out all required fields.';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Thank you! Your message has been sent.';
            formMessage.style.color = 'green';
            contactForm.reset();
        }
    });
}
