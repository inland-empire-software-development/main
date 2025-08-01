// IESD Theme JavaScript
// Note: UIKit is loaded from CDN in functions.php

class IESDTheme {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.setupAccessibility();
        this.setupNavigation();
        this.setupForms();
        this.setupLazyLoading();
        this.setupSmoothScroll();
        this.initializeUIKit();
    }

    // Accessibility improvements
    setupAccessibility() {
        // Add focus-visible polyfill behavior
        this.addFocusVisibleSupport();
        
        // Improve keyboard navigation
        this.enhanceKeyboardNavigation();
        
        // Add ARIA labels where needed
        this.addAriaLabels();
    }

    addFocusVisibleSupport() {
        // Add js-focus-visible class to body for CSS
        document.body.classList.add('js-focus-visible');
        
        // Track if user is using keyboard
        let hadKeyboardEvent = false;
        
        const keyboardThrottledEventListener = this.throttle((e) => {
            if (e.metaKey || e.altKey || e.ctrlKey) return;
            hadKeyboardEvent = true;
        }, 100);
        
        document.addEventListener('keydown', keyboardThrottledEventListener, true);
        
        document.addEventListener('mousedown', () => {
            hadKeyboardEvent = false;
        }, true);
        
        document.addEventListener('focus', (e) => {
            if (hadKeyboardEvent) {
                e.target.classList.add('focus-visible');
            }
        }, true);
        
        document.addEventListener('blur', (e) => {
            e.target.classList.remove('focus-visible');
        }, true);
    }

    enhanceKeyboardNavigation() {
        // Escape key support for modals and dropdowns
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close any open UIkit dropdowns or modals (if UIKit is available)
                if (typeof UIkit !== 'undefined') {
                    const openDropdowns = document.querySelectorAll('.uk-dropdown.uk-open');
                    openDropdowns.forEach(dropdown => UIkit.dropdown(dropdown).hide());
                    
                    const openModals = document.querySelectorAll('.uk-modal.uk-open');
                    openModals.forEach(modal => UIkit.modal(modal).hide());
                }
            }
        });
    }

    addAriaLabels() {
        // Add aria-labels to buttons without text
        document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])').forEach(button => {
            if (!button.textContent.trim()) {
                const icon = button.querySelector('[uk-icon]');
                if (icon) {
                    const iconName = icon.getAttribute('uk-icon');
                    button.setAttribute('aria-label', `${iconName} button`);
                }
            }
        });
    }

    // Navigation enhancements
    setupNavigation() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
                mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
                mobileMenu.classList.toggle('uk-open');
            });
        }
    }

    // Form enhancements
    setupForms() {
        // Add validation to forms
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                }
            });
        });
        
        // Add real-time validation
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }

    validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        const isRequired = field.hasAttribute('required');
        let isValid = true;
        
        // Remove existing error states
        field.classList.remove('uk-form-danger');
        const existingError = field.parentNode.querySelector('.form-error');
        if (existingError) existingError.remove();
        
        if (isRequired && !value) {
            isValid = false;
            this.showFieldError(field, 'This field is required');
        } else if (field.type === 'email' && value && !this.isValidEmail(value)) {
            isValid = false;
            this.showFieldError(field, 'Please enter a valid email address');
        }
        
        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('uk-form-danger');
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error uk-text-danger uk-text-small';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Lazy loading for images
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Smooth scrolling for anchor links
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Set focus for accessibility
                    target.focus();
                }
            });
        });
    }

    // Initialize UIKit components
    initializeUIKit() {
        // Check if UIKit is loaded from CDN
        if (typeof UIkit !== 'undefined') {
            UIkit.util.ready(() => {
                console.log('UIKit initialized from CDN');
            });
        } else {
            console.warn('UIKit not loaded - check CDN connection');
        }
    }

    // Utility functions
    throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize theme
new IESDTheme();

// WordPress specific enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Handle WordPress comment reply links
    const replyLinks = document.querySelectorAll('.comment-reply-link');
    replyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // WordPress comment reply functionality would go here
        });
    });
});

// Export for potential external use
window.IESDTheme = IESDTheme; 