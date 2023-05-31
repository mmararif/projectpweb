// Start:GSAP
gsap.from('.navbar', {
    duration: 1.5,
    y: -150,
    opacity: 0,
    ease: 'bounce',
});

gsap.from('.about .about-til', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});

gsap.from('.about .about-title', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});

gsap.from('.about .row', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});