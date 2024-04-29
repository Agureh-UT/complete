const navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0"
}

function hideMenu() {
    navLinks.style.right = "-200px"
}
var myCarousel = document.querySelector('#carouselExample');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000, // Set the interval for automatic sliding in milliseconds
    wrap: true, // Enable looping of slides
    slide: true // Enable smooth sliding animation
});

