const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});

const fadeElements = document.querySelectorAll('section, header');
window.addEventListener('load', () => {
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        setTimeout(() => { el.classList.add('show'); }, 150);
    });
});


document.getElementById("profile-btn").addEventListener("click", () => {
    window.open("https://open.spotify.com/user/xcm3zr7hdiyjh2cy3867l9o3m?si=ff75e52ab98b43a7", "_blank");
});

document.getElementById("website-btn").addEventListener("click", () => {
    window.open("https://elijahx29.github.io/Alquino_CSS/", "_blank");
});
