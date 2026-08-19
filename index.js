// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.product-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel && prevBtn && nextBtn) {
        const scrollAmount = 300;

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with: ${email}`);
            this.reset();
        });
    }

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h6').textContent;
            const productPrice = productCard.querySelector('.price .current').textContent;
            
            // Show feedback
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i>';
            this.style.backgroundColor = '#27ae60';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.backgroundColor = '#4a90e2';
            }, 2000);

            console.log(`Added to cart: ${productName} - ${productPrice}`);
        });
    });

    // Countdown Timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
});

function updateCountdown() {
    const timerElement = document.getElementById('timer');
    if (!timerElement) return;

    // Get current time
    let hours = 14;
    let minutes = 22;
    let seconds = Math.floor(Math.random() * 60);

    // Update seconds
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
                hours = 23;
            }
        }
    }

    // Format the timer
    const timeString = `${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m`;
    timerElement.textContent = timeString;
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (window.scrollY >= top && window.scrollY <= top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Search functionality
const searchBtn = document.querySelector('button[type="submit"]') || 
                 document.querySelector('.fa-search').closest('button');
if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const searchQuery = prompt('Search for products...');
        if (searchQuery) {
            console.log(`Searching for: ${searchQuery}`);
            alert(`Search results for "${searchQuery}" would appear here`);
        }
    });
}

// Cart functionality
const cartBtn = document.querySelector('.fa-shopping-cart').closest('button');
if (cartBtn) {
    let cartCount = 0;
    cartBtn.addEventListener('click', function() {
        alert(`Your cart has ${cartCount} items`);
    });
}

// Category card click
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('h6').textContent;
        console.log(`Viewing category: ${categoryName}`);
        // In a real app, this would navigate to the category page
    });
});

// Product card animations on hover
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });

    card.addEventListener('click', function() {
        const productName = this.querySelector('h6').textContent;
        const productPrice = this.querySelector('.price .current').textContent;
        console.log(`Viewing product: ${productName} - ${productPrice}`);
        // In a real app, this would navigate to product detail page
    });
});

// Newsletter email validation
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('invalid', function(e) {
        e.preventDefault();
        this.setCustomValidity('Please enter a valid email address');
    });

    input.addEventListener('input', function() {
        this.setCustomValidity('');
    });
});

// Scroll to top button (optional)
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Add any scroll-based animations here
    if (scrollY > 300) {
        // Could add a scroll-to-top button
    }
});

// Product filter (example)
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productCategory = product.querySelector('.category').textContent;
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Mobile menu close on link click
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse, { toggle: true });
        }
    });
});

console.log('Nexus Tech website loaded successfully!');