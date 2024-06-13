
document.addEventListener("DOMContentLoaded", function(event) { 
    const copyrightText = document.querySelector('.rotate-hover');
    setTimeout(function() {
        copyrightText.classList.add('fade-in');
    }, 500); // Adjust the delay as needed
});

const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', () => {
        // change the theme of the website
        document.body.classList.toggle('dark-theme');
    });
