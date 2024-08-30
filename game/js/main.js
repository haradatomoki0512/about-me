// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Get all image elements with the class 'img'
    const images = document.querySelectorAll('.anime .img');
    
    // Set up an index to keep track of the current image
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.opacity = '1'; // Show the current image
            } else {
                img.style.opacity = '0'; // Hide the others
            }
        });
    }

    // Show the first image initially
    showImage(currentIndex);

    // Set up a timer to change images every 5 seconds
    setInterval(() => {
        // Move to the next image
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 5000); // Change every 5 seconds
});
