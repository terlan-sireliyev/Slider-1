// Sliderdəki növbəti şəkil üçün "plus" düyməsini seçirik
const nextBtn = document.querySelector('#plus');

// Sliderdəki əvvəlki şəkil üçün "minus" düyməsini seçirik
const prevBtn = document.querySelector('#minus');

// Bütün şəkilləri (slideları) seçirik
const slides = document.querySelectorAll('.imgCard');

// Pagination (nöqtə) button-lar üçün container seçirik
const paginationContainer = document.querySelector('.slider-pagination');

// Hal-hazırki slide-ın indeksini saxlayırıq
let currentIndex = 0;


// "Next" düyməsinə klik olunanda işləyən funksiyanı yazırıq
nextBtn.addEventListener("click", function () {

    // Bütün şəkillərdən 'active' sinfini silirik
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // İndeksi 1 artırırıq. Əgər axırıncı slidedə olsa, yenidən 0-cı indexə qayıdır
    currentIndex = (currentIndex + 1) % slides.length;

    // Yeni aktiv şəkilə 'active' sinfini əlavə edirik
    slides[currentIndex].classList.add('active');
    // məs: slides[0 və ya 1].classList.add('active');

    // Pagination bullet-larının rəngini dəyişirik (aktiv bullet qırmızı olur)
    document.querySelectorAll('.slider-pagination-bullet').forEach((bullet, index) => {
        bullet.style.backgroundColor = index === currentIndex ? 'green' : '#000000cc';
    });
});

// "Previous" düyməsinə klik olunanda işləyən funksiyanı yazırıq
prevBtn.addEventListener("click", function () {

    // Bütün şəkillərdən 'active' sinfini silirik
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // İndeksi 1 azaldırıq. Əgər 0-dan geri getsə, sondakı slide-a qayıdır
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    // Yeni aktiv şəkilə 'active' sinfini əlavə edirik
    slides[currentIndex].classList.add('active');

    // Pagination bullet-larının rəngini dəyişirik (aktiv bullet qırmızı olur)
    document.querySelectorAll('.slider-pagination-bullet').forEach((bullet, index) => {
        bullet.style.backgroundColor = index === currentIndex ? 'green' : '#000000cc';
    });
});

// Hər bir şəkil üçün uyğun bir pagination bullet (nöqtə) yaradırıq
slides.forEach((slide, index) => {

    // Yeni bir bullet düyməsi yaradırıq
    const bullet = document.createElement('button');
    bullet.classList.add('slider-pagination-bullet');

    // Hər bullet-ə klik funksiyası əlavə edirik
    bullet.addEventListener("click", function () {

        // Bütün şəkillərdən 'active' sinfini silirik
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        // İndeksi əvvəlcə artırırıq (bu artıq lazım deyil, sənə səhvdir)
        currentIndex = (currentIndex + 1) % slides.length;

        // Sonra kliklənən bullet-ın indeksinə təyin edirik
        currentIndex = index;

        // Seçilən şəkilə 'active' sinfini əlavə edirik
        slides[currentIndex].classList.add('active');

        // Bütün bullet-ların rəngini yenidən düzəldirik
        document.querySelectorAll('.slider-pagination-bullet').forEach((bullet, index) => {
            bullet.style.backgroundColor = index === currentIndex ? 'green' : '#000000cc';
        });
    });

    // Bullet-in içində nömrə yazırıq (1, 2, 3 və s.)
    bullet.textContent = index + 1;


    // Bullet-i paginationContainer-ə əlavə edirik
    paginationContainer.appendChild(bullet);
});
document.querySelectorAll('.slider-pagination-bullet').forEach((bullet, index) => {
    bullet.style.backgroundColor = index === currentIndex ? 'green' : '#000000cc';
});



// Manual mouse drag functionality
const slider = document.querySelector('.imageClassBase');
let isDragging = false;
let startX = 0;
let endX = 0;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    endX = e.clientX;
});

slider.addEventListener('mouseup', () => {
    slider.style.cursor = 'grab';
    if (!isDragging) return;
    const diff = endX - startX;

    if (diff > 50) {
        // swipe right
        // Bütün şəkillərdən 'active' sinfini silirik
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // İndeksi 1 azaldırıq. Əgər 0-dan geri getsə, sondakı slide-a qayıdır
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;

        // Yeni aktiv şəkilə 'active' sinfini əlavə edirik
        slides[currentIndex].classList.add('active');

        // Pagination bullet-larının rəngini dəyişirik (aktiv bullet qırmızı olur)
        document.querySelectorAll('.slider-pagination-bullet').forEach((bullet, index) => {
            bullet.style.backgroundColor = index === currentIndex ? 'green' : '#000000cc';
        });
    } else if (diff < -50) {
        // swipe left
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        // İndeksi 1 artırırıq. Əgər axırıncı slidedə olsa, yenidən 0-cı indexə qayıdır
        currentIndex = (currentIndex + 1) % slides.length;

        // Yeni aktiv şəkilə 'active' sinfini əlavə edirik
        slides[currentIndex].classList.add('active');
        // məs: slides[0 və ya 1].classList.add('active');

        // Pagination bullet-larının rəngini dəyişirik (aktiv bullet qırmızı olur)
        document.querySelectorAll('.slider-pagination-bullet').forEach((bullet, index) => {
            bullet.style.backgroundColor = index === currentIndex ? 'green' : '#000000cc';
        });
    }

    isDragging = false;
});

slider.addEventListener('mouseleave', () => {
    isDragging = false;
    slider.style.cursor = 'grab';
});
