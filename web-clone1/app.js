  const circle =   document.querySelector("#minicircle")
   
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// MOUSE FOLLOWER

function circleMouseFollower() {
    window.addEventListener("mousemove",function(dets){
       circle.style.transform = `translate(${dets.clientX}px ,${dets.clientY}px )`

    })
}

circleMouseFollower();

function firstPageAnim() {
    var t1 = gsap.timeline();
    t1.from("#nav", {
        
    })
}