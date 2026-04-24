const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(element) {
  lightboxImg.src = element.src; // Copy clicked image URL to modal
  lightbox.style.display = 'flex'; // Show the modal
}

function closeLightbox() {
  lightbox.style.display = 'none'; // Hide the modal
}