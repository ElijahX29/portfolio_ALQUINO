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

// Fade-in animation
const fadeElements = document.querySelectorAll('section, header');
window.addEventListener('load', () => {
  fadeElements.forEach(el => {
    el.classList.add('fade-in');
    setTimeout(() => el.classList.add('show'), 150);
  });
});

// Spotify button
document.getElementById("profile-btn").addEventListener("click", () => {
  window.open(
    "https://open.spotify.com/user/xcm3zr7hdiyjh2cy3867l9o3m",
    "_blank"
  );
});

// ✅ NEW BUTTONS
document.getElementById("yt-btn").addEventListener("click", () => {
  window.open(
    "https://youtu.be/uUOmJX4GdSk?si=cDiZyiAucL96BHA2",
    "_blank"
  );
});

document.getElementById("report-btn").addEventListener("click", () => {
  window.open(
    "https://malayancollegesmindanaoo365-my.sharepoint.com/:f:/g/personal/enalquino_mcm_edu_ph/IgAko0KLzH3gRZvMl1iOO6KYAZoNjmumQYhL3MV8MLwjrCM?e=bGI6yH",
    "_blank"
  );
});
