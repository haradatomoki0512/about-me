document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.anime .img img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            const enlargedSrc = this.src;
            const enlargedImg = document.createElement('img');
            enlargedImg.src = enlargedSrc;
            enlargedImg.classList.add('enlarged');
            enlargedImg.style.position = 'fixed';
            enlargedImg.style.top = '50%';
            enlargedImg.style.left = '50%';
            enlargedImg.style.transform = 'translate(-50%, -50%)';
            enlargedImg.style.maxWidth = '90%';
            enlargedImg.style.maxHeight = '90%';
            enlargedImg.style.zIndex = '1000';
            enlargedImg.style.cursor = 'pointer';
            enlargedImg.style.border = '5px solid #fff';

            // Add the enlarged image to the body
            document.body.appendChild(enlargedImg);

            // Add click event to close the enlarged image
            enlargedImg.addEventListener('click', function() {
                document.body.removeChild(enlargedImg);
            });
        });
    });
});
