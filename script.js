// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Form submission
document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const company = this.querySelector('input[type="text"]:nth-of-type(2)').value;
    
    const mailtoLink = `mailto:info@inetum.com?subject=HANALYST SmartFix - Demo Request&body=Nome: ${name}%0AEmail: ${email}%0AEmpresa: ${company}%0A%0A`;
    
    window.location.href = mailtoLink;
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add styles for active nav
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
        padding-bottom: 2px;
    }
`;
document.head.appendChild(style);

console.log('HANALYST SmartFix website loaded');
