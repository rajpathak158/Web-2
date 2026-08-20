// =========================================
// PEACH LAW
// STEP 2 — PREMIUM ANIMATION SYSTEM
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    // =====================================
    // REDUCED MOTION CHECK
    // =====================================

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    // =====================================
    // LOADER
    // =====================================

    const loader =
        document.querySelector(".loader");

    const loaderLine =
        document.querySelector(".loader-line div");


    if (!reducedMotion) {

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

    } else {

        loader.style.display = "none";

    }


    // =====================================
    // HERO TITLE SPLIT
    // =====================================

    const title =
        document.querySelector("h1");


    if (title && !reducedMotion) {

        const text =
            title.innerHTML;

        title.innerHTML =
            text
                .replace(
                    /([^<]+)(?=<|$)/g,
                    (match) => {

                        return match
                            .split("")
                            .map(char => {

                                if (char === " ") {
                                    return " ";
                                }

                                return `
                                    <span class="char">
                                        ${char}
                                    </span>
                                `;

                            })
                            .join("");

                    }
                );

    }


    // =====================================
    // HERO INTRO
    // =====================================

    if (!reducedMotion) {

        const heroTimeline =
            gsap.timeline({
                delay: 1.35
            });


        heroTimeline

            .from(".navbar", {
                y: -25,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            })

            .from(".hero-kicker", {
                y: 20,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out"
            }, "-=0.45")

            .from(".char", {
                y: 90,
                opacity: 0,
                rotateX: -80,
                stagger: 0.025,
                duration: 0.8,
                ease: "power4.out"
            }, "-=0.35")

            .from(".hero-description", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.45")

            .from(".hero-actions", {
                y: 25,
                opacity: 0,
                duration: 0.7
            }, "-=0.5")

            .from(".hero-bottom", {
                opacity: 0,
                duration: 0.7
            }, "-=0.3");

    }


    // =====================================
    // HERO LIGHT
    // =====================================

    const hero =
        document.querySelector(".hero");

    const orb =
        document.querySelector(".hero-orb");


    if (hero && orb) {

        hero.addEventListener(
            "pointermove",
            (event) => {

                if (reducedMotion) return;

                const rect =
                    hero.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const moveX =
                    (x / rect.width - 0.5) * 80;

                const moveY =
                    (y / rect.height - 0.5) * 80;


                gsap.to(orb, {
                    x: moveX,
                    y: moveY,
                    duration: 1.2,
                    ease: "power3.out",
                    overwrite: true
                });

            }
        );

    }


    // =====================================
    // FLOATING HERO LIGHT
    // =====================================

    if (!reducedMotion) {

        gsap.to(".hero-orb", {

            scale: 1.08,

            duration: 6,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });


        gsap.to(".hero-grid", {

            backgroundPosition:
                "90px 90px",

            duration: 12,

            repeat: -1,

            ease: "none"

        });

    }


    // =====================================
    // NAVBAR
    // =====================================

    const navbar =
        document.querySelector(".navbar");


    ScrollTrigger.create({

        start: "top -80",

        onUpdate: self => {

            if (self.scroll() > 80) {

                navbar.classList.add(
                    "scrolled"
                );

            } else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        }

    });


    // =====================================
    // HERO PARALLAX
    // =====================================

    if (!reducedMotion) {

        gsap.to(".hero-content", {

            yPercent: -18,

            ease: "none",

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",

                end: "bottom top",

                scrub: 1

            }

        });


        gsap.to(".hero-orb", {

            yPercent: 25,

            ease: "none",

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",

                end: "bottom top",

                scrub: 1.5

            }

        });

    }


    // =====================================
    // GENERIC SECTION REVEAL
    // =====================================

    document
        .querySelectorAll(".section-label")
        .forEach(label => {

            gsap.from(label, {

                y: 25,
                opacity: 0,

                duration: 0.8,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: label,

                    start: "top 85%"

                }

            });

        });


    // =====================================
    // INTRO
    // =====================================

    gsap.from(".intro h2", {

        y: 80,
        opacity: 0,

        duration: 1.1,

        ease: "power4.out",

        scrollTrigger: {

            trigger: ".intro",

            start: "top 70%"

        }

    });


    gsap.from(".intro-copy", {

        y: 60,
        opacity: 0,

        duration: 1,

        delay: 0.15,

        ease: "power3.out",

        scrollTrigger: {

            trigger: ".intro",

            start: "top 70%"

        }

    });


    // =====================================
    // PRACTICE HEADER
    // =====================================

    gsap.from(".practice-header", {

        y: 60,
        opacity: 0,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: ".practice",

            start: "top 70%"

        }

    });


    // =====================================
    // PRACTICE CARDS
    // =====================================

    const cards =
        document.querySelectorAll(
            ".practice-card"
        );


    cards.forEach((card, index) => {

        gsap.from(card, {

            y: 60,
            opacity: 0,

            duration: 0.9,

            delay: index * 0.08,

            ease: "power3.out",

            scrollTrigger: {

                trigger: card,

                start: "top 88%"

            }

        });


        // Mouse hover

        if (!reducedMotion) {

            card.addEventListener(
                "mouseenter",
                () => {

                    gsap.to(card, {

                        x: 10,

                        duration: 0.35,

                        ease: "power3.out"

                    });

                    gsap.to(
                        card.querySelector(
                            ".practice-arrow"
                        ),
                        {
                            x: 6,
                            y: -6,
                            rotate: 5,
                            duration: 0.35
                        }
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    gsap.to(card, {

                        x: 0,

                        duration: 0.4,

                        ease: "power3.out"

                    });

                    gsap.to(
                        card.querySelector(
                            ".practice-arrow"
                        ),
                        {
                            x: 0,
                            y: 0,
                            rotate: 0,
                            duration: 0.4
                        }
                    );

                }
            );

        }

    });


    // =====================================
    // APPROACH
    // =====================================

    gsap.from(".approach-heading", {

        x: -80,
        opacity: 0,

        duration: 1.1,

        ease: "power4.out",

        scrollTrigger: {

            trigger: ".approach",

            start: "top 70%"

        }

    });


    gsap.from(".approach-point", {

        x: 80,
        opacity: 0,

        duration: 0.9,

        stagger: 0.15,

        ease: "power3.out",

        scrollTrigger: {

            trigger: ".approach-points",

            start: "top 75%"

        }

    });


    // =====================================
    // APPROACH NUMBER
    // =====================================

    if (!reducedMotion) {

        gsap.to(".large-number", {

            y: -30,

            ease: "none",

            scrollTrigger: {

                trigger: ".approach",

                start: "top bottom",

                end: "bottom top",

                scrub: true

            }

        });

    }


    // =====================================
    // CONTACT
    // =====================================

    gsap.from(".contact-content > *", {

        y: 70,

        opacity: 0,

        duration: 0.9,

        stagger: 0.15,

        ease: "power4.out",

        scrollTrigger: {

            trigger: ".contact",

            start: "top 75%"

        }

    });


    // =====================================
    // CONTACT GLOW
    // =====================================

    if (!reducedMotion) {

        gsap.to(".contact-glow", {

            scale: 1.3,

            opacity: 0.75,

            duration: 5,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });

    }


    // =====================================
    // MAGNETIC BUTTONS
    // =====================================

    if (!reducedMotion) {

        document
            .querySelectorAll(
                ".button-dark, .contact-button"
            )
            .forEach(button => {

                button.addEventListener(
                    "pointermove",
                    event => {

                        const rect =
                            button.getBoundingClientRect();

                        const x =
                            event.clientX -
                            rect.left -
                            rect.width / 2;

                        const y =
                            event.clientY -
                            rect.top -
                            rect.height / 2;


                        gsap.to(button, {

                            x: x * 0.12,

                            y: y * 0.12,

                            duration: 0.35,

                            ease: "power3.out"

                        });

                    }
                );


                button.addEventListener(
                    "pointerleave",
                    () => {

                        gsap.to(button, {

                            x: 0,
                            y: 0,

                            duration: 0.5,

                            ease: "elastic.out(1,0.4)"

                        });

                    }
                );

            });

    }


    // =====================================
    // MOBILE MENU
    // =====================================

    const menu =
        document.querySelector(
            ".mobile-menu"
        );

    const mobileNav =
        document.querySelector(
            ".mobile-nav"
        );


    menu.addEventListener(
        "click",
        () => {

            mobileNav.classList.toggle(
                "open"
            );

        }
    );


    mobileNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileNav.classList.remove(
                        "open"
                    );

                }
            );

        });


    // =====================================
    // FINAL REFRESH
    // =====================================

    window.addEventListener(
        "load",
        () => {

            ScrollTrigger.refresh();

        }
    );

});
