
$(document).ready(function () {
    let gallery = $('.gallery');
    let totalImages = $('.gallery img').length;
    let slideWidth = $('.gallery img').width();
    let maxSlides = 3;
    let slideCounter = 0;

    function calculateTranslateValue(index) {
        let slideDistanceMultiplier = 0.608; 


        if (window.matchMedia('(max-width: 440px)').matches) {
            slideDistanceMultiplier = 0.20; // Adjust the multiplier for smaller screens
        }

        return -index * slideWidth * slideDistanceMultiplier;
    }

    function slideGallery() {
        let currentIndex = slideCounter % totalImages;
        let translateValue = calculateTranslateValue(currentIndex);
        gallery.css('transform', 'translateX(' + translateValue + 'px)');
        slideCounter++;

        if (slideCounter >= maxSlides * totalImages) {
            slideCounter = 0;
            gallery.css('transform', 'translateX(0)');
            clearInterval(slideInterval);
        }
    }

    let slideInterval = setInterval(slideGallery, 3000); // Change slide every 3 seconds (adjust as needed)
});