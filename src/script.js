const nextBtn = document.querySelector('#plus');
const prevBtn = document.querySelector('#minus');
const slides = document.querySelectorAll('.imgCard');
const paginationContainer = document.querySelector('.slider-pagination');

let currentIndex = 0;

function updateSlider(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');

    const bullets = document.querySelectorAll('.slider-pagination-bullet');
    bullets.forEach(b => b.classList.remove('active'));
    bullets[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(currentIndex);
});

slides.forEach((_, index) => {
    const bullet = document.createElement('button');
    bullet.classList.add('slider-pagination-bullet');
    bullet.textContent = index + 1;
    if (index === currentIndex) bullet.classList.add('active');

    bullet.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(index);
    });

    paginationContainer.appendChild(bullet);
});
