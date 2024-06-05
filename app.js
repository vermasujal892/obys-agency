function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();

function lodingAnimation(){
    gsap.from(".loader .line h1",{
        y:"100%",
        duration:0.6,
        // opacity:0,
        stagger:0.25,
        delay:0.5,
    })
    
    
    
    let changer = document.querySelector(".line-part1 h5");
    let now = document.querySelector(".line h1 span")
    
    let count = 0;
    let stop = setInterval(()=>{
        count++;
        changer.textContent = count;
        if(count == 100){
            clearInterval(stop);
        }
    },30)
    
    
    let stopnow = setInterval(()=>{
        let counter = "0"
        counter++;
        // console.log(counter);
         if(count%2 == 0){
            now.classList.remove("black")
            
         }
         else{
            now.classList.add("black")
         }
        if(count == 100){
            clearInterval(stop);
        }
    },70)
    
    
    
    let tl = gsap.timeline();
    
    tl.from(".line-part1,.line h1 span,.line p",{
        opacity:0,
        delay:1,
    
    })
    tl.to(".loader",{
        opacity:0,
        duration:0.2,
        delay:0,
    })
    
    tl.from(".page1",{
        y:2000,
        opacity:0,
        delay:0.2,
        ease:Power4,
        duration:1,
    })
    
    tl.to(".loader",{
        display:"none",
    })

    tl.from(".nav",{
        opacity:0,
         
    })
    tl.from("#hero1  h1,#hero2 h1,#hero3 h2,h3,#hero4 h1",{
        y:120,
        opacity:0,
        duration:0.6,
        stagger:0.2,

    })
}
lodingAnimation();

function curserAnimation(){
    document.addEventListener("mousemove",(dets)=>{
        gsap.to(".crsr",{
         left:dets.x,
         top:dets.y,
        })
     })
     
     Shery.makeMagnet(".nav-routes h4");
     
}

curserAnimation();


function sheryAnimation(){
    Shery.imageEffect(".img-div",{
        style:5,
        // debug:true,
        gooey:true,
        config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272695760684946},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}}
        
    })
}

sheryAnimation();
