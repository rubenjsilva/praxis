var swiper = new Swiper('.swiper-container-gallery', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});