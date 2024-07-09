// const { Power1 } = require("gsap");

// const { Power3 } = require("gsap");

const circle = document.querySelector("#minicircle")

   
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout; 

// MOUSE FOLLOWER

function circleMouseFollower(xscale,yscale) {
    window.addEventListener("mousemove",function(dets){
       circle.style.transform = `translate(${dets.clientX}px ,${dets.clientY}px ) scale(${xscale} , ${yscale})`

    })
}
circleMouseFollower();


function circleSqueeze() {
     var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        var xdiff = dets.clientX - xprev;
          var ydiff = dets.clientY - yprev;
        xprev = dets.clientX;
        yprev = dets.clientY;

       xscale =  gsap.utils.clamp(.7, 1.2, xdiff);
       yscale =  gsap.utils.clamp(.7, 1.2, ydiff);
        
        // console.log(xdiff, ydiff);
        circleMouseFollower(xscale, yscale);
       timeout =  setTimeout(function () {
                   circle.style.transform = `translate(${dets.clientX}px ,${dets.clientY}px ) scale(1,1)`

        },100)
    })
}
circleSqueeze();







function firstPageAnim() {
    var t1 = gsap.timeline();

    t1.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease : Expo.easeInOut
    })
    t1.to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.7,
        delay:-1,
        stagger:.3
    })
    t1.from("#hero-footer", {
        y: '-10',
        ease: Expo.easeInOut,
        opacity:0,
        duration: 1.5,
        delay:-1.5,
        stagger:.5
    })

}
firstPageAnim();



document.querySelectorAll(".elem").forEach(function (element) {
    var rotate = 0;
    var difference = 0;

    element.addEventListener("mouseleave", function (dets) {
                
        

            gsap.to(element.querySelector("img"), {
                opacity: 0,
                ease: Power3.easeInOut,
                duration : .5
            }); 
               
        });
        
    element.addEventListener("mousemove", function (dets) {
                
        var diff = dets.clientY - element.getBoundingClientRect().top;
        difference = dets.clientX - rotate;
        rotate = dets.clientX;

            gsap.to(element.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                top: diff,
                left: dets.clientX,
               rotate : gsap.utils.clamp(-20,20,difference*.7)

            }); 
               
        });
    });
