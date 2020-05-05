if(localStorage.getItem('cookieSeen') != 'shown'){
    $(".cookie-banner").delay(1000).fadeIn();
    localStorage.setItem('cookieSeen','shown')
}

$('.close-cookie').click(function(e) {
    $('.cookie-banner').fadeOut(); 
});