// script.js - Funções de animação e interatividade

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar ícones Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Scroll Observer para animações fade-in
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: parar de observar após a primeira animação
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    // Parallax suave na imagem do herói
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroImg = document.querySelector('.hero-image img');
        if(heroImg && scrolled < 600) {
            heroImg.style.transform = `translateY(${scrolled * -0.1}px)`;
        }
    });
});
