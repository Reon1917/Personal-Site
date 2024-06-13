
document.addEventListener("DOMContentLoaded", function(event) { 
    const copyrightText = document.querySelector('.rotate-hover');
    setTimeout(function() {
        copyrightText.classList.add('fade-in');
    }, 500); // Adjust the delay as needed
});
