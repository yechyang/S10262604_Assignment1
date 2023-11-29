document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 1;
    showText(currentIndex);

    function showText(index) {
        let texts = document.querySelectorAll(".slider-text");
        texts.forEach((text) => {
            text.style.display = +text.getAttribute("data-index") === index ? "block" : "none";
        });
    }

    window.currentSlide = function (index) {
        currentIndex = index;
        showText(currentIndex);
    };
});