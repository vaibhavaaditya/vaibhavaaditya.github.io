(function() {
    // Immediately invoked function to set the theme on initial load
    try {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.dataset.theme = 'dark';
        }
    } catch (e) {
        // Ignore errors from localStorage access
    }
})();