let next = document.getElementById('next');
let prev = document.getElementById('prev');
let back = document.getElementById('back');
let seeMore = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let list = document.querySelector('.carousel .list');

let intervalId; // Store the interval ID
let currentIndex = 0; // Keep track of the current index
let items = document.querySelectorAll('.carousel .list .item');

const showSlider = () => {
    carousel.classList.remove('prev', 'next');
    list.appendChild(items[currentIndex]);
    currentIndex++;

    if (currentIndex >= items.length) {
        // cycles through all the items, then resets the index
        currentIndex = 0;
        // Stop the interval
        clearInterval(intervalId);
    }
};

const runCarousel = () => {
    showSlider();
};

next.onclick = function () {
    showSlider();
};

prev.onclick = function () {
    carousel.classList.add('prev');
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    list.insertBefore(items[currentIndex], list.firstChild);
};

seeMore.forEach(button => {
    button.onclick = function() {
        carousel.classList.add('seeDetail');
    };
});

back.onclick = function go () {
    carousel.classList.remove('seeDetail');
};

// Run the carousel cycle once
intervalId = setInterval(runCarousel, 25); 
