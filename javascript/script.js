gsap.set(".btnleft", {
    x:0,
    y:0,
    rotation: -90,
    transformOrigin: "bottom right"
});
gsap.set(".btncenter", {
    x:-50,
    y:0,
});

gsap.set(".btnright", {
    x: -45,   // Left
   
});


const btn = document.querySelector(".btnsec");

btn.addEventListener("mouseenter",()=>{
    tl.play();
});

btn.addEventListener("mouseleave",()=>{
    tl.reverse();
});


const tl = gsap.timeline({paused:true});

tl.to(".btnright", {
    x:0,
    y:0,
    rotation: -90,
    transformOrigin: "top left",
    duration: 0.7,
});
tl.to(".btncenter",{
   x: 5,
    y:0,
    duration:.45,
},"<");

tl.to(".btnleft", {
    x: 0,
    y: 0,
    rotation: 0,
    duration: 0.7,
}, "<");







gsap.registerPlugin(ScrollTrigger);

const data = gsap.to(".horiscroll", {
    x: "-50%",
    duration: 20,
    ease: "none",
    repeat: -1
});

// Change direction based on scroll
ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
        data.timeScale(self.direction); 
    }
});






gsap.set(".btnleft2", {
    x:0,
    y:0,
    rotation: -90,
    opacity: 0,
    transformOrigin: "bottom right"
});
gsap.set(".btncenter2", {
    x:-50,
    y:0,
});

gsap.set(".btnright2", {
    x: -45,   // Left
   
});

const tl2 = gsap.timeline({paused:true});

tl2.to(".btnright2", {
    x:0,
    y:0,
    rotation: -90,
    opacity: 0,
    transformOrigin: "top left",
    duration: 0.8,
    ease: "power3.out"
});
tl2.to(".btncenter2",{
   x: 5,
    y:0,
    duration:.45,
    ease:"power2.out"
},"<");

tl2.to(".btnleft2", {
    x: 0,
    y: 0,
    rotation: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out"
}, "<");




const btn2 = document.querySelector(".btnsec2");

btn2.addEventListener("mouseenter",()=>{
    tl2.play();
});

btn2.addEventListener("mouseleave",()=>{
    tl2.reverse();
});



gsap.to(".imgleft",{
    yPercent:-50,
    ease:"none",
    scrollTrigger:{
        trigger:".animatesec",
        start:"top bottom",
        end:"bottom top",
        scrub:0.5
    }
});

gsap.to(".imgright",{
    yPercent:-50,
    ease:"none",
    scrollTrigger:{
        trigger:".animatesec",
        start:"top bottom",
        end:"bottom top",
        scrub:0.5
    }
});

