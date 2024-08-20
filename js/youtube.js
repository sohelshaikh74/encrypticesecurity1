
document.addEventListener('DOMContentLoaded', function () {
    const sliderTrack = document.querySelector('.slider-track');
    const sliderCards = document.querySelectorAll('.slider-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupContent = document.querySelector('.popup-content iframe');
    const closePopup = document.querySelector('.close-popup');

    let currentIndex = 1;
    let cardWidth = sliderCards[0].offsetWidth;

    // Clone first and last slides
    const firstClone = sliderCards[0].cloneNode(true);
    const lastClone = sliderCards[sliderCards.length - 1].cloneNode(true);

    sliderTrack.appendChild(firstClone);
    sliderTrack.insertBefore(lastClone, sliderTrack.firstChild);

    let totalSlides = sliderCards.length + 2;
    sliderTrack.style.transform = `translateX(-${cardWidth}px)`;

    function updateCardWidth() {
        cardWidth = sliderCards[0].offsetWidth;
        updateSlider();
    }

    function updateSlider() {
        const offset = -(currentIndex * cardWidth);
        sliderTrack.style.transform = `translateX(${offset}px)`;
    }

    function goToNextSlide() {
        currentIndex++;
        updateSlider();
        if (currentIndex === totalSlides - 1) {
            setTimeout(() => {
                sliderTrack.style.transition = 'none';
                currentIndex = 1;
                updateSlider();
                sliderTrack.style.transition = 'transform 0.5s ease-in-out';
            }, 500);
        }
    }
    function goToPreviousSlide() {
        currentIndex--;
        updateSlider();
        if (currentIndex === 0) {
            setTimeout(() => {
                sliderTrack.style.transition = 'none';
                currentIndex = sliderCards.length;
                updateSlider();
                sliderTrack.style.transition = 'transform 0.5s ease-in-out';
            }, 500);
        }
    }
    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', goToPreviousSlide);

    sliderCards.forEach(card => {
        card.querySelector('a').addEventListener('click', function (event) {
            event.preventDefault();
            const videoSrc = this.getAttribute('data-video');
            popupContent.src = videoSrc;
            popupOverlay.style.display = 'flex';
        });
    });

    closePopup.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
        popupContent.src = '';
    });

    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
            popupContent.src = '';
        }
    });

    window.addEventListener('resize', updateCardWidth);

    // Initial setup
    updateCardWidth();
});