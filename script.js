const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(element) {
  lightboxImg.src = element.src; // Copy clicked image URL to modal
  lightbox.style.display = 'flex'; // Show the modal
}

function closeLightbox() {
  lightbox.style.display = 'none'; // Hide the modal
}

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Optional: Save preference to local storage so it stays after refresh
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Check for saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}
