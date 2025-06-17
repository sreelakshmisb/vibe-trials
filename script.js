document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme on load
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleButton.textContent = 'Toggle Light Mode';
        }
    } else {
        // Default to light theme if no preference is saved
        document.body.setAttribute('data-theme', 'light');
        toggleButton.textContent = 'Toggle Dark Mode';
    }

    toggleButton.addEventListener('click', () => {
        let theme = document.body.getAttribute('data-theme');
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            toggleButton.textContent = 'Toggle Dark Mode';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggleButton.textContent = 'Toggle Light Mode';
        }
    });
});
