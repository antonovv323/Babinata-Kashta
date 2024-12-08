window.addEventListener('resize', function() {
    
    if (window.innerWidth <= 768) {
        const phoneTexts = document.querySelectorAll('.phone-text');

        phoneTexts.forEach(function(element) {
            element.textContent = element.textContent.replace(/-/g, '').replace(/\s+/g, '');
        });
    } else {
        const phoneTexts = document.querySelectorAll('.phone-text');
        phoneTexts.forEach(function(element) {
        });
    }
});

window.dispatchEvent(new Event('resize'));