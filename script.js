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

document.getElementById("song-btn").addEventListener("click", () => {
    window.open("https://open.spotify.com/track/7JXZq0JgG2zTrSOAgY8VMC?si=36a913f1e66040ea", "_blank");
});

document.getElementById("profile-btn").addEventListener("click", () => {
    window.open("https://open.spotify.com/user/YOUR-USER-ID-HERE", "_blank");
});

document.getElementById("website-btn").addEventListener("click", () => {
    window.open("https://elijahx29.github.io/Alquino_CSS/", "_blank");
});
