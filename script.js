// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 150, density: { enable: true, value_area: 800 } },
        color: { value: '#00ff00' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#00ff00', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, random: true, out_mode: 'out' }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 150 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Custom Cursor Logic
const cursor = document.getElementById('custom-cursor');
const cursorTrail = document.getElementById('cursor-trail');
let cursorX = 0, cursorY = 0, trailX = 0, trailY = 0;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursor.style.left = `${cursorX - 10}px`;
    cursor.style.top = `${cursorY - 10}px`;
});

function animateTrail() {
    trailX += (cursorX - trailX) * 0.1;
    trailY += (cursorY - trailY) * 0.1;
    cursorTrail.style.left = `${trailX - 5}px`;
    cursorTrail.style.top = `${trailY - 5}px`;
    requestAnimationFrame(animateTrail);
}
animateTrail();
