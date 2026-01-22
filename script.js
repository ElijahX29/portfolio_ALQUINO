const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const boxes = document.querySelectorAll('.box-section');

let theme = 'navy';

toggleButton.addEventListener('click', () => {
  if (theme === 'navy') {
    body.style.backgroundColor = '#333333';
    body.style.color = '#ffffff';
    boxes.forEach(box => {
      box.style.backgroundColor = '#0a2540';
      box.style.color = '#ffffff';
    });
    theme = 'gray';
  } else {
    body.style.backgroundColor = '#0a2540';
    body.style.color = '#ffffff';
    boxes.forEach(box => {
      box.style.backgroundColor = '#d3d3d3';
      box.style.color = '#000000';
    });
    theme = 'navy';
  }
});

const fadeElements = document.querySelectorAll('section, header');
window.addEventListener('load', () => {
  fadeElements.forEach(el => {
    el.classList.add('fade-in');
    setTimeout(() => el.classList.add('show'), 150);
  });
});

document.getElementById("profile-btn").addEventListener("click", () => {
  window.open(
    "https://open.spotify.com/user/xcm3zr7hdiyjh2cy3867l9o3m",
    "_blank"
  );
});
