// =========================================
// PEACH LAW
// Main JavaScript
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // GSAP SETUP
    // =====================================

    gsap.registerPlugin(ScrollTrigger);


    // =====================================
    // LOADER
    // =====================================

    const loader =
        document.querySelector(".loader");

    const loaderLine =
        document.querySelector(".loader-line div");


    const loaderTimeline =
        gsap.timeline();


    loaderTimeline
        .to(loaderLine, {
            width: "100%",
            duration: 1.4,
            ease: "power2.inOut"
        })
        .to(loader, {
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            onComplete: () => {
                loader.style.display = "none";
            }
        });


    // =====================================
    // HERO INTRO
    // =====================================

    const heroTimeline =
        gsap.timeline({
            delay: 1.5
        });


    heroTimeline
        .from(".navbar", {
            y: -30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        .from(".hero-kicker", {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.4")
        .from("h1", {
            y: 70,
            opacity: 0,
            duration: 1.1,
            ease: "power4.out"
        }, "-=0.35")
        .from(".hero-description", {
            y: 25,
            opacity: 0,
            duration: 0.7
        }, "-=0.55")
        .from(".hero-actions", {
            y: 20,
            opacity: 0,
            duration: 0.6
        }, "-=0.4")
        .from(".hero-bottom", {
            opacity: 0,
            duration: 0.6
        }, "-=0.25");


    // =====================================
    // HERO ORB MOVEMENT
    // =====================================

    gsap.to(".hero-orb", {
        x: -60,
        y: 30,
        scale: 1.08,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });


    // =====================================
    // HERO GRID
    // =====================================

    gsap.to(".hero-grid", {
        backgroundPosition: "0 90px",
        duration: 8,
        repeat: -1,
        ease: "none"
    });


    // =====================================
    // NAVBAR ON SCROLL
    // =====================================

    const navbar =
        document.querySelector(".navbar");


    ScrollTrigger.create({

        start: "top -80",

        onUpdate: (self) => {

            if (self.scroll() > 80) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        }

    });


    // =====================================
    // INTRO ANIMATION
    // =====================================

    gsap.from(".intro .section-label", {

        y: 30,
        opacity: 0,
        duration: 0.8,

        scrollTrigger: {
            trigger: ".intro",
            start: "top 75%"
        }

    });


    gsap.from(".intro h2", {

        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".intro",
            start: "top 70%"
        }

    });


    gsap.from(".intro-copy", {

        y: 50,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,

        scrollTrigger: {
            trigger: ".intro",
            start: "top 70%"
        }

    });


    // =====================================
    // PRACTICE CARDS
    // =====================================

    gsap.from(".practice-header", {

        y: 60,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".practice",
            start: "top 70%"
        }

    });


    gsap.from(".practice-card", {

        y: 45,
        opacity: 0,

        duration: 0.8,

        stagger: 0.12,

        ease: "power3.out",

        scrollTrigger: {
            trigger: ".practice-list",
            start: "top 75%"
        }

    });


    // =====================================
    // APPROACH
    // =====================================

    gsap.from(".approach-heading", {

        x: -80,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".approach",
            start: "top 70%"
        }

    });


    gsap.from(".approach-point", {

        x: 60,
        opacity: 0,

        duration: 0.8,

        stagger: 0.15,

        ease: "power3.out",

        scrollTrigger: {
            trigger: ".approach-points",
            start: "top 75%"
        }

    });


    // =====================================
    // CONTACT
    // =====================================

    gsap.from(".contact-content > *", {

        y: 70,
        opacity: 0,

        duration: 0.9,

        stagger: 0.15,

        ease: "power3.out",

        scrollTrigger: {
            trigger: ".contact",
            start: "top 75%"
        }

    });


    // =====================================
    // CONTACT GLOW
    // =====================================

    gsap.to(".contact-glow", {

        scale: 1.3,
        opacity: 0.8,

        duration: 5,

        repeat: -1,
        yoyo: true,

        ease: "sine.inOut"

    });


    // =====================================
    // MOBILE MENU
    // =====================================

    const menu =
        document.querySelector(".mobile-menu");

    const mobileNav =
        document.querySelector(".mobile-nav");


    menu.addEventListener("click", () => {

        mobileNav.classList.toggle("open");

    });


    document
        .querySelectorAll(".mobile-nav a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("open");

            });

        });


    // =====================================
    // BUTTON HOVER EFFECT
    // =====================================

    document
        .querySelectorAll(
            ".button, .contact-button, .nav-cta"
        )
        .forEach(button => {

            button.addEventListener(
                "mouseenter",
                () => {

                    gsap.to(button, {
                        scale: 1.025,
                        duration: 0.25
                    });

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    gsap.to(button, {
                        scale: 1,
                        duration: 0.25
                    });

                }
            );

        });


    // =====================================
    // REFRESH SCROLLTRIGGER
    // =====================================

    window.addEventListener(
        "load",
        () => {
            ScrollTrigger.refresh();
        }
    );

});
