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
        delay:2,
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
