const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const boxes = document.querySelectorAll('.box-section');

let theme = 'navy';

if (toggleButton) {
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
}

// Fade-in animation
const fadeElements = document.querySelectorAll('section, header');

window.addEventListener('load', () => {
  fadeElements.forEach((el, index) => {
    el.classList.add('fade-in');

    setTimeout(() => {
      el.classList.add('show');
    }, 150 * index);
  });
});

// Buttons (safe checks)
const profileBtn = document.getElementById("profile-btn");
if (profileBtn) {
  profileBtn.addEventListener("click", () => {
    window.open("https://open.spotify.com/user/xcm3zr7hdiyjh2cy3867l9o3m", "_blank");
  });
}

const ytBtn = document.getElementById("yt-btn");
if (ytBtn) {
  ytBtn.addEventListener("click", () => {
    window.open("https://youtu.be/uUOmJX4GdSk?si=cDiZyiAucL96BHA2", "_blank");
  });
}

const reportBtn = document.getElementById("report-btn");
if (reportBtn) {
  reportBtn.addEventListener("click", () => {
    window.open("https://malayancollegesmindanaoo365-my.sharepoint.com/:f:/g/personal/enalquino_mcm_edu_ph/IgAko0KLzH3gRZvMl1iOO6KYAZoNjmumQYhL3MV8MLwjrCM?e=bGI6hY", "_blank");
  });
}
