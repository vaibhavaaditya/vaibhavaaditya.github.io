// Function to apply the saved theme
const applyTheme = (theme) => {
    if (theme === 'dark') {
        document.documentElement.dataset.theme = 'dark';
    } else {
        document.documentElement.dataset.theme = 'light';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('theme-toggle-checkbox');
    
    if (!toggleCheckbox) return;

    // Set initial checkbox state based on the theme set by theme-loader.js
    if (document.documentElement.dataset.theme === 'dark') {
        toggleCheckbox.checked = true;
    }

    // Listen for toggle change
    toggleCheckbox.addEventListener('change', () => {
        const newTheme = toggleCheckbox.checked ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // Use a timeout to ensure the initial state is rendered before enabling transitions
    setTimeout(() => {
        document.body.classList.remove('no-transition');
    }, 0);
});