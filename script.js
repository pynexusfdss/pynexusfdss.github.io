document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle Button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.padding = '10px';
    toggleButton.style.backgroundColor = '#00712D';
    toggleButton.style.color = '#ffffff';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';
    document.body.appendChild(toggleButton);

    // Check for saved dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const darkModeEnabled = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', darkModeEnabled ? 'enabled' : 'disabled');
    });

    // Parallax Effect on Header
    const header = document.querySelector('.animated-header');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
});
