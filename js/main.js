// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    console.log('Form submitted');
    // Add loading state
    button.style.backgroundColor = 'var(--color-deep-blue)';
    button.textContent = 'Sending...';
    
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        button.style.backgroundColor = 'var(--color-bright-blue)';
        button.textContent = 'Message Sent!';
        
        // Reset form
        setTimeout(() => {
            e.target.reset();
            button.textContent = 'Send Message';
        }, 2000);
    }, 1000);
});

// Track outbound links
document.querySelectorAll('.work-card__link').forEach(link => {
    link.addEventListener('click', function(e) {
        // If you're using Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'Portfolio',
                'event_label': this.href
            });
        }
    });
});

// 3D Bubble Particle Animation
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 5; // Increased size range
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.4 + 0.2; // Increased opacity
    }

    draw(ctx) {
        // Enhanced 3D bubble effect
        const gradient = ctx.createRadialGradient(
            this.x - this.size * 0.3,
            this.y - this.size * 0.3,
            0,
            this.x,
            this.y,
            this.size
        );
        
        // More vibrant colors using your brand palette
        gradient.addColorStop(0, `rgba(252, 136, 255, ${this.opacity + 0.3})`);
        gradient.addColorStop(0.6, `rgba(136, 255, 234, ${this.opacity + 0.1})`);
        gradient.addColorStop(1, `rgba(136, 255, 234, 0)`);

        // Main bubble
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Enhanced highlight spot
        ctx.beginPath();
        ctx.arc(
            this.x - this.size * 0.3,
            this.y - this.size * 0.3,
            this.size * 0.3, // Larger highlight
            0,
            Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity + 0.2})`;
        ctx.fill();
    }

    update(mouseX, mouseY) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (mouseX && mouseY) {
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            if (distance < maxDistance) {
                const force = (1 - distance / maxDistance) * 0.02;
                this.x -= dx * force;
                this.y -= dy * force;
            }
        }
    }
}

function initHeroAnimation() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = null;
    let mouseY = null;

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
        const numberOfParticles = 40; // Fewer particles since they're bigger
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            ));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update(mouseX, mouseY);
            particle.draw(ctx);

            // Keep particles strictly within bounds
            if (particle.x + particle.size < 0) particle.x = canvas.width;
            if (particle.x - particle.size > canvas.width) particle.x = 0;
            if (particle.y + particle.size < 0) particle.y = canvas.height;
            if (particle.y - particle.size > canvas.height) particle.y = 0;
        });

        requestAnimationFrame(animate);
    }

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', () => {
        mouseX = null;
        mouseY = null;
    });

    window.addEventListener('resize', () => {
        resize();
        particles = [];
        createParticles();
    });

    resize();
    createParticles();
    animate();
}

document.addEventListener('DOMContentLoaded', initHeroAnimation); 