// Start:GSAP
gsap.from('.navbar', {
    duration: 1.5,
    y: -150,
    opacity: 0,
    ease: 'bounce',
});

gsap.from('.gallery .gallery-til', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});

gsap.from('.gallery .gallery-title', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});

gsap.from('.gallery .more-card', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});

