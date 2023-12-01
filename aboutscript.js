
$(document).ready(function () {
    // Select the gallery container and gather relevant information about the images
    let gallery = $('.gallery');
    let totalImages = $('.gallery img').length;
    let slideWidth = $('.gallery img').width();
    let maxSlides = 5;
    let slideCounter = 0;

    function calculateTranslateValue(index) {
        let slideDistanceMultiplier = 0.59; // Function to control the amount of slide of the gallery


        if (window.matchMedia('(max-width: 440px)').matches) {
            slideDistanceMultiplier = 0.185; // Adjust the multiplier for smaller screens
        }

        return -index * slideWidth * slideDistanceMultiplier;
    }

    // Function to slide the gallery
    function slideGallery() {
        let currentIndex = slideCounter % totalImages;
        // Calculate the amount of slide of the gallery
        let translateValue = calculateTranslateValue(currentIndex); 
        gallery.css('transform', 'translateX(' + translateValue + 'px)'); // Apply the translation to the gallery using CSS transform
        slideCounter++;

        // Reset the gallery slide when reach max slide
        if (slideCounter >= maxSlides * totalImages) {
            slideCounter = 0;
            gallery.css('transform', 'translateX(0)');
            clearInterval(slideInterval); // Stop the slide interval
        }
    }

    let slideInterval = setInterval(slideGallery, 3000); // Change slide every 3 seconds (adjust as needed)
    typeText();
});
