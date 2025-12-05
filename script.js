
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

const songButton = document.getElementById('song-button');

songButton.addEventListener('click', () => {
    window.open("https://open.spotify.com/track/7JXZq0JgG2zTrSOAgY8VMC?si=f6566a3ddf964c6d", "JUNGLE");
});
