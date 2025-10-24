// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Typing effect in hero
function typeWriter() {
    const text = "Your Name";
    const element = document.querySelector('h1');
    const cursor = document.querySelector('.typing-cursor');
    let index = 0;

    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            // Keep cursor visible
            if (cursor) cursor.style.display = 'inline-block';
        }
    }

    type();
}

// Parallax effect
function setupParallax() {
    const parallaxGrid = document.getElementById('parallaxGrid');
    
    gsap.to(parallaxGrid, {
        y: 100,
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            markers: false
        }
    });
}

// Fade in animations on scroll
function setupFadeIns() {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach((element, index) => {
        gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 20%',
                scrub: false,
                markers: false
            }
        });
    });
}

// Glitch hover effect
function setupGlitchHover() {
    document.querySelectorAll('.glitch-hover').forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, {
                x: gsap.utils.random(-2, 2),
                y: gsap.utils.random(-2, 2),
                duration: 0.1
            });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.2
            });
        });
    });
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Show success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        document.getElementById('contactForm').reset();
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    typeWriter();
    setupParallax();
    setupFadeIns();
    setupGlitchHover();
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});