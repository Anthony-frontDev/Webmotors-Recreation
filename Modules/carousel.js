function getCarouselChildren() {
    const carouselChildren = document.querySelector("header .carousel").children;
    const carouselImages = carouselChildren[0];
    const carouselArrows = carouselChildren[1];
    return [carouselImages.children, carouselArrows.children];
}

function Count() {
    let count = 1;

    function increase() {
        count++;
    }
    function decrease() {
        count--;
    }
    function getCount() {
        return count;
    }
    function setCount(newValue) {
        count = newValue;
    }

    return {increase, decrease, getCount, setCount}
}

function checkCounter() {
    const [images, arrows] = getCarouselChildren();

    if(Counter.getCount() > images.length) {
        Counter.setCount(1);
    }
    if(Counter.getCount() < 1) {
        Counter.setCount(images.length);
    }
}

const Counter = Count();

function updateCarousel() {
    const [images, arrows] = getCarouselChildren();
    const imagesArray = Array.from(images);

    checkCounter();

    imagesArray.forEach(image => {
        !image.classList.contains("hidden") ? image.classList.add("hidden") : null;
        image.classList.contains("active") ? image.classList.remove("active") : null;

        if(image.id == `c${Counter.getCount()}`) {
            image.classList.replace("hidden", "active");
        }
    });    
}

const timer = setInterval(() => {
    Counter.increase();
    updateCarousel();
}, 6000);

function forwards() {
    Counter.increase();
    updateCarousel();
    clearInterval(timer);
}
function backwards() {
    Counter.decrease();
    updateCarousel();
    clearInterval(timer);
}

updateCarousel();

