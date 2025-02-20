// GSAP Animations
gsap.from(".overlay-text, .text", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".small-text", {
    opacity: 0,
    y: 50,
    duration: 1.8,
    delay: 0.5,
    ease: "power3.out"
});
