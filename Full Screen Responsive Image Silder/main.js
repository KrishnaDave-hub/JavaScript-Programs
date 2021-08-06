const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    // Remove Current Class
    current.classList.remove('current');
    // Check For Next Slide
    if (current.nextElementSibling) {
        // Add Current To Next Sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //  Add Current To Start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    const current = document.querySelector('.current');
    // Remove Current Class
    current.classList.remove('current');
    // Check For Next Slide
    if (current.previousElementSibling) {
        // Add Current To Next Sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //  Add Current To Last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button Events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        // Run Next Slide At Interval Time
        slideInterval = setInterval(nextSlide, intervalTime)
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        // Run Next Slide At Interval Time
        slideInterval = setInterval(nextSlide, intervalTime)
    }

});

// Auto Slide
if (auto) {
    // Run Next Slide At Interval Time
    slideInterval = setInterval(nextSlide, intervalTime);
}