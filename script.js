document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.photo-card img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    function showLightbox(index) {
        currentIndex = index;
        const img = images[index];
        lightboxImg.src = img.src;
        lightboxDesc.textContent = img.getAttribute('data-desc');
        lightbox.style.display = 'block';
    }

    function hideLightbox() {
        lightbox.style.display = 'none';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        showLightbox(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showLightbox(currentIndex);
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => showLightbox(index));
    });

    closeBtn.addEventListener('click', hideLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowRight') {
                showNext();
            } else if (e.key === 'ArrowLeft') {
                showPrev();
            } else if (e.key === 'Escape') {
                hideLightbox();
            }
        }
    });
});

