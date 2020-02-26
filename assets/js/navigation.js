var isActive = false;

$('.burger-menu').on('click', function() {
    if (isActive) {
        $(this).removeClass('active');
        $('.overlay').removeClass('menu-open');
    } else {
        $(this).addClass('active');
        $('.overlay').addClass('menu-open');
    }

    isActive = !isActive;
});