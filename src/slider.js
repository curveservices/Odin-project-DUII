const slider = (() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const slider = document.querySelector('.slider');

    // Show the first slide and set a timer for automatic sliding
    showSlide(currentSlide);
    setInterval(nextSlide, 5000);

    function showSlide(a) {
        currentSlide = a;

        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - a)}%)`;
        });
        updateDots();
    };

    function nextSlide() {
        if (currentSlide < slides.length -1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    };

    nextButton.addEventListener('click', () => {
        nextSlide();
    })

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = slides.length -1;
        }
        showSlide(currentSlide);
    }

    prevButton.addEventListener('click', () => {
        prevSlide();
    });

     // Create dots based on the number of slides
     function createDots() {
        slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = ('dot');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => showSlide(index));
    });
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // create finger slide function
    const hammertime = new Hammer(slider);
    hammertime.on('swipeleft', nextSlide);
    hammertime.on('swiperight', prevSlide);

    return {
        createDots,
        showSlide,
        nextSlide,
        prevSlide,
        hammertime,
    };
})();

export default slider;



