const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.4 } });

tl
    .to('.name h1', {
        duration: 1,
        opacity: 1, 
        y: "-50%",
        ease: 'elastic.out(1, 0.5)'
    })
    .to('.name h2', {
        duration: 1,
        opacity: 1, 
        y: "-50%",
    }, "-=0.7")
    .to('.name h3', {
        duration: 1.3,
        opacity: 1, 
        x: "-50%",
        ease: 'elastic.out(1, 0.5)'
    }, "-=0.7")
    .to('.nav', {
        duration: .6,
        opacity: 1, 
    }, "+=1")