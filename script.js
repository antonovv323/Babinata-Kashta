// STARTING FROM THE TOP OF THE SITE //

window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// ----------------------------------------- //

//SHOWING THE EFFECTS//

window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.element');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.transitionDelay = `${index * 0.15}s`;
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });

    elements.forEach(element => observer.observe(element));
});

// ----------------------------------------- //