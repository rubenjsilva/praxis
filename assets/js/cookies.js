// General Cookies

if(localStorage.getItem('cookieSeen') != 'shown'){
    $(".cookie-banner").delay(1000).fadeIn();
    localStorage.setItem('cookieSeen','shown')
}

$('.close-cookie').click(function(e) {
    $('.cookie-banner').fadeOut(); 
});


// Popup Age Verification Cookie

 $(function() {

  //Check it the user has been accpeted the agreement
  if (!(document.cookie && document.cookie == "accepted")) {
    $("#popup").show();
  }

  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    //Set a cookie to remember the state
    document.cookie = "accepted";

    e.preventDefault();
  });

});


// Popup Age Verification

$(function() {

  //Check it the user has been accpeted the agreement
  if (!localStorage.getItem('accepted')) {
    $("#popup").show();
  }

  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    //Set a cookie to remember the state
    localStorage.setItem('accepted', true);

    e.preventDefault();
  });
});