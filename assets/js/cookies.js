if(localStorage.getItem('cookieSeen') != 'shown'){
    $(".cookie-banner").delay(1000).fadeIn();
    localStorage.setItem('cookieSeen','shown')
    console.log(cookieSeen);
}

$('.close-cookie').click(function(e) {
    $('.cookie-banner').fadeOut(); 
});