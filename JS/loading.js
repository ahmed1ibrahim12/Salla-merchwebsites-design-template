document.addEventListener("DOMContentLoaded", function () {
    // Set overflow to hidden while loading
    document.body.style.overflow = 'hidden';

    window.addEventListener('load', function () {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';

        setTimeout(function () {
            loadingScreen.style.display = 'none';
            const content = document.getElementById('content');
            content.style.display = 'block';

            // Restore overflow after loading is complete
            document.body.style.overflow = 'auto';
        }, 500);
    });
});
