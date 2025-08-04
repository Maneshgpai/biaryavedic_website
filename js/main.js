// Main JavaScript for Bio-Aryavedic Naturals

// Handle video loading and playback
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video');
    
    if (video) {
        // Show video once it's loaded
        video.addEventListener('loadeddata', function() {
            video.classList.add('loaded');
        });

        // Handle video loading errors
        video.addEventListener('error', function() {
            console.log('Video failed to load, using fallback background');
            video.style.display = 'none';
            // Add fallback background to hero section
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.background = 'linear-gradient(135deg, #5996c5, #3a88c5)';
            }
        });

        // Ensure video plays on mobile devices
        video.addEventListener('canplay', function() {
            video.play().catch(function(error) {
                console.log('Video autoplay failed:', error);
            });
        });

        // Add timeout to show video even if loading takes too long
        setTimeout(function() {
            if (!video.classList.contains('loaded')) {
                video.classList.add('loaded');
                console.log('Video loading timeout, showing anyway');
            }
        }, 3000);
    }

    // Features carousel functionality
    const featuresTrack = document.querySelector('.features-track');
    if (featuresTrack) {
        let isPaused = false;
        let startX = 0;
        let scrollLeft = 0;

        // Pause animation on hover
        featuresTrack.addEventListener('mouseenter', function() {
            isPaused = true;
            featuresTrack.style.animationPlayState = 'paused';
        });

        featuresTrack.addEventListener('mouseleave', function() {
            isPaused = false;
            featuresTrack.style.animationPlayState = 'running';
        });

        // Touch support for mobile devices
        featuresTrack.addEventListener('touchstart', function(e) {
            startX = e.touches[0].pageX - featuresTrack.offsetLeft;
            scrollLeft = featuresTrack.scrollLeft;
            featuresTrack.style.animationPlayState = 'paused';
        });

        featuresTrack.addEventListener('touchmove', function(e) {
            if (!startX) return;
            const x = e.touches[0].pageX - featuresTrack.offsetLeft;
            const walk = (x - startX) * 2;
            featuresTrack.scrollLeft = scrollLeft - walk;
        });

        featuresTrack.addEventListener('touchend', function() {
            startX = 0;
            setTimeout(() => {
                featuresTrack.style.animationPlayState = 'running';
            }, 1000);
        });

        // Keyboard support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.preventDefault();
                featuresTrack.style.animationPlayState = 'paused';
                setTimeout(() => {
                    featuresTrack.style.animationPlayState = 'running';
                }, 2000);
            }
        });
    }
});

// Component loader function
function loadComponent(componentName, targetElement) {
    fetch(`components/${componentName}.html`)
        .then(response => response.text())
        .then(html => {
            targetElement.innerHTML = html;
            
            // Initialize burger menu if header component is loaded
            if (componentName === 'header') {
                initializeBurgerMenu();
            }
        })
        .catch(error => {
            console.error(`Error loading component ${componentName}:`, error);
        });
}

// Burger menu initialization function
function initializeBurgerMenu() {
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', function() {
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!burgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on window resize (if screen becomes larger)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        console.log('Burger menu initialized successfully');
    } else {
        console.log('Burger menu elements not found');
    }
}


// Initialize all components
document.addEventListener('DOMContentLoaded', function() {
    // Load components if they exist
    const componentContainers = document.querySelectorAll('[data-component]');
    componentContainers.forEach(container => {
        const componentName = container.getAttribute('data-component');
        loadComponent(componentName, container);
    });
}); 