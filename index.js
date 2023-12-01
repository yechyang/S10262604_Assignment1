document.addEventListener("DOMContentLoaded", function () {
    //Current index for slider
    let currentIndex = 1;
    showText(currentIndex);

    // Function to show/hide slider texts based on the given index
    function showText(index) {
        //Select all elements with the class "slider-text"
        let texts = document.querySelectorAll(".slider-text");
        // Iterate through each slider text
        texts.forEach((text) => {
            text.style.display = +text.getAttribute("data-index") === index ? "block" : "none"; //if match display else hide
        });
    }

    //Make the function to be accessible anywhere
    window.currentSlide = function (index) {
        currentIndex = index; //Display the appropriate text
        showText(currentIndex);
    };
});