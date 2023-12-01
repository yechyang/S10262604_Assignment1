document.addEventListener('DOMContentLoaded', function() {
    // Simulate a delay
    var loadingDuration = document.body.dataset.page === 'home' ? 1000 : 1000;

    setTimeout(function() {
        document.getElementById('loadingPage').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    }, loadingDuration); // Adjust the timeout duration as needed
});