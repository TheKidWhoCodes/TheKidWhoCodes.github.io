let Image = document.getElementById('check-out-image');

document.addEventListener('scroll', function() {
    // Get scroll position
    let scrollPosition = window.pageYOffset;

    let desiredDistance = 400;

    // Calculate whether the scroll is desiredDistance or not then set the opacity to face the header out
    if (scrollPosition <= desiredDistance) {
        Image.style.opacity = 1 - scrollPosition / desiredDistance;
    } else {
        Image.style.opacity = 0;
    }

});