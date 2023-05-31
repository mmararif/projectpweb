//feather icons
feather.replace();

// Start:GSAP
gsap.from('.navbar', {
    duration: 1.5,
    y: -150,
    opacity: 0,
    ease: 'bounce',
});

gsap.from('.home .home-left', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});

gsap.from('.home .home-center', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});

gsap.from('.home .home-right', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});