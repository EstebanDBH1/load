
/*=================PRELOADER========*/

window.addEventListener("load", ()=>{
    setTimeout(()=>{  
    let tl = gsap.timeline();

    tl.to(".preloader__container p span", {
        y: "100%",
        ease: "Expo.easeIn",
        duration: 1,
        stagger: 0.2

    })
    tl.to(".loader1, .loader2, .loader3", {
        y: "-100%",
        stagger: 0.1
    })
})
}, 2000)

gsap.from(".social li a", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    stagger: 0.1,
    delay: 3,
  });

  gsap.from(".p0 span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 3.1,
  });

  gsap.from(".p1 span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 3.2,
  });

  gsap.from(".p3 span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 3.3,
  });

  gsap.from(".p4 span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 3.4,
  });

  gsap.from(".p5 span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 3.5,
  });

  gsap.from(".pr span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 3.6,
  });

  gsap.from(".menu__lista li a", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 3.7,
  });
/*
  gsap.from(".social li a", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    stagger: 0.1,
    delay: 0.5,
  });

  gsap.from(".p0 span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 0.6,
  });

  gsap.from(".p1 span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 0.7,
  });

  gsap.from(".p3 span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 0.8,
  });

  gsap.from(".p4 span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 0.9,
  });

  gsap.from(".p5 span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 1,
  });

  gsap.from(".pr span", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 1.1,
  });

  gsap.from(".menu__lista li a", {
    y: "-100%",
    ease: "power3.easeInOut",
    duration: 1,
    delay: 1.2,
  });

*/