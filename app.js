let next = document.getElementById('next');
let prev = document.getElementById('prev');
let back = document.getElementById('back');
let seeMore = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let list = document.querySelector('.carousel .list')


const showSlider = (type) => {
    carousel.classList.remove('prev','next')
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        list.appendChild(items[0])
        
    }
    
    else{
        let positionLast = items.length - 1;
        list.prepend(items[positionLast])
        carousel.classList.add('prev');
    }

}


next.onclick = function () {
    showSlider('next');
}


prev.onclick = function () {
    showSlider('prev');

}

seeMore.forEach(button => {
    button.onclick = function() {
        carousel.classList.add('seeDetail')
    }
});

    back.onclick = function go () {
        carousel.classList.remove('seeDetail');
        
    }

// setTimeout(go, 100000);
