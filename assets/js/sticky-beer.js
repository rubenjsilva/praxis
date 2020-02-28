bottleSize = function () {
    // Get the real width of the bottle image
    var bottle = $("#bottle-shr");
    var newImage = new Image();
    newImage.src = bottle.attr("src");
    // var imgWidth = newImage.width;
    
    // distance over which zoom effect takes place
    var maxScrollDistance = 1300;
    
    // set to window height if larger
    maxScrollDistance = Math.min(maxScrollDistance, $(window).height());
    
    // width at maximum zoom out (i.e. when window has scrolled maxScrollDistance)
    // var widthAtMax = 100;
    
    // calculate diff and how many pixels to zoom per pixel scrolled
    // var widthDiff = imgWidth - widthAtMax;
    // var pixelsPerScroll =(widthDiff / maxScrollDistance);

    $(window).scroll(function () {
        // the currently scrolled-to position - max-out at maxScrollDistance
        var scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance+100);
        
        // how many pixels to adjust by
        // var scrollChangePx =  Math.floor(scrollTopPos/100 * pixelsPerScroll);
        
        // calculate the new width
        // var zoomedWidth = imgWidth - scrollChangePx;
        
        // set the width
        $('.bottle-img').css('height', (85 - scrollTopPos/100)+'%');
    });
}
bottleSize();