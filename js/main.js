import * as THREE from "three";


// ============================================
// SETUP
// ============================================

const canvas = document.querySelector("#space");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);

camera.position.z = 12;


const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: "high-performance"
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 1.5)
);

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);


// ============================================
// STARS
// ============================================

const starCount = 3500;

const starGeometry = new THREE.BufferGeometry();

const starPositions = new Float32Array(
    starCount * 3
);

for (let i = 0; i < starCount; i++) {

    const i3 = i * 3;

    starPositions[i3] =
        (Math.random() - 0.5) * 900;

    starPositions[i3 + 1] =
        (Math.random() - 0.5) * 900;

    starPositions[i3 + 2] =
        (Math.random() - 0.5) * 900;
}

starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        starPositions,
        3
    )
);


const starMaterial =
    new THREE.PointsMaterial({

        color: 0xffffff,

        size: 0.7,

        transparent: true,

        opacity: 0.8
    });


const stars =
    new THREE.Points(
        starGeometry,
        starMaterial
    );

scene.add(stars);


// ============================================
// GLOWING PLANET
// ============================================

const planetGeometry =
    new THREE.SphereGeometry(
        3.5,
        64,
        64
    );


const planetMaterial =
    new THREE.MeshBasicMaterial({
        color: 0x162033,
        wireframe: true,
        transparent: true,
        opacity: 0.12
    });


const planet =
    new THREE.Mesh(
        planetGeometry,
        planetMaterial
    );

planet.position.set(
    4,
    0,
    -3
);

scene.add(planet);


// ============================================
// INNER CORE
// ============================================

const coreGeometry =
    new THREE.SphereGeometry(
        2.7,
        48,
        48
    );


const coreMaterial =
    new THREE.MeshBasicMaterial({
        color: 0x050505
    });


const core =
    new THREE.Mesh(
        coreGeometry,
        coreMaterial
    );

planet.add(core);


// ============================================
// MOUSE MOVEMENT
// ============================================

let mouseX = 0;
let mouseY = 0;

window.addEventListener(
    "pointermove",
    (event) => {

        mouseX =
            (event.clientX / window.innerWidth - 0.5);

        mouseY =
            (event.clientY / window.innerHeight - 0.5);

    }
);


// ============================================
// ANIMATION
// ============================================

const clock =
    new THREE.Clock();


function animate() {

    requestAnimationFrame(animate);

    const time =
        clock.getElapsedTime();


    // Stars slowly rotate
    stars.rotation.y =
        time * 0.006;

    stars.rotation.x =
        time * 0.002;


    // Planet rotation
    planet.rotation.y =
        time * 0.12;

    planet.rotation.x =
        time * 0.03;


    // Camera reacts to mouse
    camera.position.x +=
        (mouseX * 1.2 - camera.position.x) * 0.025;

    camera.position.y +=
        (-mouseY * 0.8 - camera.position.y) * 0.025;

    camera.lookAt(0, 0, 0);


    renderer.render(
        scene,
        camera
    );
}

animate();


// ============================================
// RESIZE
// ============================================

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio,
                1.5
            )
        );

    }
);


// ============================================
// GSAP INTRO
// ============================================

gsap.from(".logo", {
    opacity: 0,
    y: -20,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".hero-content > *", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    stagger: 0.12,
    ease: "power3.out",
    delay: 0.3
});

gsap.from(".scroll-indicator", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1.2
});
