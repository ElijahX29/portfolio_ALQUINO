const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('red');
});

const fadeElements = document.querySelectorAll('section, header');

window.addEventListener('load', () => {
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        setTimeout(() => {
            el.classList.add('show');
        }, 150);
    });
});

// NEW BUTTON REDIRECT FEATURE
document.getElementById("website-btn").addEventListener("click", () => {
    window.open("YOUR_WEBSITE_LINK_HERE", "_blank"); 
});
