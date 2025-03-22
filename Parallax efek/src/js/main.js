var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: { slidesPerView: 1, },
        520: { slidesPerView: 2 },
        950: { slidesPerView: 3 },
    },
})

// span id

function mainElement() {
    const nama = document.getElementById("nama");
    const lahir = document.getElementById("lahir");

    nama.innerText = "William Tanuwijawa"
    lahir.innerText = "11 November 1981 di Pematang Siantara, Sumatra Utara, Indonesia"
}

mainElement()