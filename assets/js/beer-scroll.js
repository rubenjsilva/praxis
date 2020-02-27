var object = document.querySelectorAll(".obj");
 
  
  var controller = new ScrollMagic.Controller();

  var horizontalSlide = new TimelineMax()
  // animate panels
  .to("#js-slideContainer", 1,   {x: "-3%", onComplete:addActive,onCompleteParams:[1],onReverseComplete:addActive,onReverseCompleteParams:[0]})    
  .to("#js-slideContainer", 1,   {x: "-6%", onComplete:addActive,onCompleteParams:[2],onReverseComplete:addActive,onReverseCompleteParams:[1]})
  .to("#js-slideContainer", 1,   {x: "-9%", onComplete:addActive,onCompleteParams:[3],onReverseComplete:addActive,onReverseCompleteParams:[2]})
  .to("#js-slideContainer", 1,   {x: "-12%", onComplete:addActive,onCompleteParams:[4],onReverseComplete:addActive,onReverseCompleteParams:[3]})
  .to("#js-slideContainer", 1,   {x: "-15%", onComplete:addActive,onCompleteParams:[5],onReverseComplete:addActive,onReverseCompleteParams:[4]})    
  .to("#js-slideContainer", 1,   {x: "-18%", onComplete:addActive,onCompleteParams:[6],onReverseComplete:addActive,onReverseCompleteParams:[5]})
  .to("#js-slideContainer", 1,   {x: "-21%", onComplete:addActive,onCompleteParams:[7],onReverseComplete:addActive,onReverseCompleteParams:[6]})
  .to("#js-slideContainer", 1,   {x: "-24%", onComplete:addActive,onCompleteParams:[8],onReverseComplete:addActive,onReverseCompleteParams:[7]})
  .to("#js-slideContainer", 1,   {x: "-27%", onComplete:addActive,onCompleteParams:[9],onReverseComplete:addActive,onReverseCompleteParams:[8]})


  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "200%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide) 
    .addTo(controller);
  
 
function addActive(index){
  //console.log(headers[index]);
  for(i=0;i<object.length;i++)       
    if(i === index) {object[i].classList.add("active");}
    else{object[i].classList.remove("active");}
  }
