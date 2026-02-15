// Initialisation AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Fermer le menu mobile
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                document.querySelector('.navbar-toggler').click();
            }
        }
    });
});

// Animation des barres de progression
const progressBars = document.querySelectorAll('.progress-bar');
let animated = false;

function animateProgressBars() {
    if (animated) return;
    
    progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 1s ease';
            bar.style.width = width;
        }, index * 100);
    });
    
    animated = true;
}

// Observer pour les compétences
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(skillsSection);
}

// Parallax effect subtil
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Animation des tech items
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Bouton retour en haut
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
backToTop.className = 'back-to-top';
backToTop.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    z-index: 99;
    transition: all 0.3s ease;
`;

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation au survol des cartes projet
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    const icon = card.querySelector('.project-image i');
    if (icon) {
        card.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0)';
        });
    }
});

// Gestion des erreurs d'images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // Les placeholders UI Avatars fonctionnent déjà, mais au cas où
        console.log('Image loaded successfully or fallback used');
    });
});

// Détection du support tactile
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Performance
window.addEventListener('load', () => {
    console.log('Portfolio chargé avec succès !');
});

// Effet parallaxe pour la bannière
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const layers = document.querySelectorAll('.parallax-layer');
    
    layers.forEach((layer, index) => {
        // Vitesse différente pour chaque couche (plus la couche est profonde, plus le mouvement est lent)
        const speed = 0.05 * (index + 1);
        const yPos = -(scrolled * speed);
        const xPos = scrolled * 0.01 * (index % 2 === 0 ? 1 : -1); // Mouvement horizontal subtil
        
        layer.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Animation supplémentaire au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Appliquer une position initiale aléatoire aux images pour plus de dynamisme
    const images = document.querySelectorAll('.parallax-img');
    images.forEach(img => {
        const randomX = (Math.random() - 0.5) * 20;
        const randomY = (Math.random() - 0.5) * 20;
        img.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
});