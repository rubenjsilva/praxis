
$('#nextButton').click(function() {
    var slideNumber = $($(this).attr('href')).index('.page'),
        margin = slideNumber * 100 + '%';

    $('main').animate({ marginLeft: margin }, 750);
    return false;
});


function packClick(clickedId) {
    const clickedPackId = clickedId;
    console.log(clickedPackId);


    var els = document.getElementsByClassName("pack-container");
    for (var i = 0; i < els.length; i++) {
        els[i].classList.remove('selected')
    }

    const selectedPack = document.getElementById(clickedPackId);
    selectedPack.classList.add("selected");

    const nextButton = document.getElementById('nextButton');
    nextButton.classList.remove("disabled");

}
