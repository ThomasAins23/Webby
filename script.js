// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    let isValid = true;
    this.querySelectorAll('input, textarea').forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = 'initial';
        }
    });

    if (isValid) {
        // Submit the form or do further processing
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});

// Simple Carousel for Testimonials
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonials div');
setInterval(() => {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
}, 3000);

// Scroll Animations
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});
