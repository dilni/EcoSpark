document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackInput = document.getElementById('feedbackInput');
    const cancelButton = document.querySelector('.cancel-button');
    const feedbackModal = document.getElementById('feedbackModal');
    const ratingModal = document.getElementById('ratingModal');
    const modalOkButtons = document.querySelectorAll('.modal-button');
    const closeModals = document.querySelectorAll('.close-modal');
    
    // Rating buttons functionality
    const ratingButtons = document.querySelectorAll('.rating-button');
    let selectedRating = null;
    
    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Reset all buttons to default color
            ratingButtons.forEach(btn => {
                btn.style.color = '#ccc';
            });
            
            // Highlight selected button
            this.style.color = '#ffcc00';
            selectedRating = this.textContent;
            
            // Show rating confirmation modal
            showRatingConfirmation(this.textContent);
        });
    });
    
    // Show rating confirmation
    function showRatingConfirmation(rating) {
        const ratingText = document.getElementById('ratingConfirmationText');
        ratingText.textContent = `You rated: ${rating}`;
        ratingModal.style.display = 'block';
    }
    
    // Form submission
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (feedbackInput.value.trim() === '') {
                alert('Please enter your feedback before submitting.');
                return;
            }
            
            // Here you would typically send the feedback to a server
            console.log('Feedback submitted:', feedbackInput.value);
            console.log('Rating:', selectedRating);
            
            // Show the feedback modal
            if (feedbackModal) feedbackModal.style.display = 'block';
            
            // Reset the form
            feedbackInput.value = '';
            ratingButtons.forEach(btn => {
                btn.style.color = '#ccc';
            });
            selectedRating = null;
        });
    }
    
    // Cancel button functionality
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            if (feedbackInput) feedbackInput.value = '';
            ratingButtons.forEach(btn => {
                btn.style.color = '#ccc';
            });
            selectedRating = null;
        });
    }
    
    // Modal close functionality
    modalOkButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (feedbackModal) feedbackModal.style.display = 'none';
            if (ratingModal) ratingModal.style.display = 'none';
        });
    });
    
    closeModals.forEach(modal => {
        modal.addEventListener('click', function() {
            if (feedbackModal) feedbackModal.style.display = 'none';
            if (ratingModal) ratingModal.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside of them
    window.addEventListener('click', function(event) {
        if (feedbackModal && event.target === feedbackModal) {
            feedbackModal.style.display = 'none';
        }
        if (ratingModal && event.target === ratingModal) {
            ratingModal.style.display = 'none';
        }
    });

    // Review expand functionality
    document.querySelectorAll('.see-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const reviewCard = this.closest('.review-card');
            if (reviewCard) {
                reviewCard.classList.add('expanded');
                // Optional: Smooth scroll to show the expanded content
                reviewCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    // Application Form Functionality
    document.querySelectorAll('.card1 .content a').forEach(applyButton => {
        applyButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the program title from the card
            const card = this.closest('.card1');
            const programTitle = card.querySelector('.title').textContent;
            const programTitleElement = document.getElementById('programTitle');
            
            // Set the program title in the modal
            if (programTitleElement) programTitleElement.textContent = `Applying for: ${programTitle}`;
            
            // Show the application modal
            const applicationModal = document.getElementById('applicationModal');
            if (applicationModal) {
                applicationModal.style.display = 'block';
                // Scroll to top of modal in case it was previously scrolled
                const modalContent = applicationModal.querySelector('.modal-content');
                if (modalContent) modalContent.scrollTop = 0;
            }
        });
    });

    // Volunteer Form Submission
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const programTitleElement = document.getElementById('programTitle');
            const programTitle = programTitleElement ? programTitleElement.textContent : '';
            
            // Validate form
            if (!formData.get('fullName') || !formData.get('email') || !formData.get('phone')) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Show loading effect
            const submitBtn = this.querySelector('.submit-button');
            if (submitBtn) {
                submitBtn.textContent = 'Submitting...';
                submitBtn.disabled = true;
            }
            
            // Simulate form processing (replace with actual AJAX call)
            setTimeout(() => {
                // Show success modal
                const successModal = document.getElementById('successModal');
                const successMessage = document.getElementById('successMessage');
                if (successMessage) {
                    successMessage.textContent = `Thank you for applying to ${programTitle}. We'll contact you soon!`;
                }
                
                if (successModal) {
                    // Add fade-in effect
                    successModal.style.display = 'block';
                }
                
                // Reset form
                this.reset();
                if (submitBtn) {
                    submitBtn.textContent = 'Submit Application';
                    submitBtn.disabled = false;
                }
                
                // Close application modal
                const applicationModal = document.getElementById('applicationModal');
                if (applicationModal) applicationModal.style.display = 'none';
            }, 1500); // Simulate network delay
        });
    }

    // Cancel button effect for application modal
    const modalCancel = document.querySelector('.modal-cancel');
    if (modalCancel) {
        modalCancel.addEventListener('click', function() {
            const modal = document.getElementById('applicationModal');
            if (modal) {
                // Add fade-out effect
                modal.classList.add('fade-out');
                
                // Close after animation completes
                setTimeout(() => {
                    modal.style.display = 'none';
                    modal.classList.remove('fade-out');
                    const volunteerForm = document.getElementById('volunteerForm');
                    if (volunteerForm) volunteerForm.reset();
                }, 200);
            }
        });
    }

    // Success modal OK button
    const successOkButton = document.getElementById('successOkButton');
    if (successOkButton) {
        successOkButton.addEventListener('click', function() {
            const successModal = document.getElementById('successModal');
            if (successModal) {
                // Add fade-out effect
                successModal.classList.add('fade-out');
                
                // Close after animation completes
                setTimeout(() => {
                    successModal.style.display = 'none';
                    successModal.classList.remove('fade-out');
                }, 200);
            }
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const appModal = document.getElementById('applicationModal');
        const successModal = document.getElementById('successModal');
        
        if (appModal && event.target === appModal) {
            appModal.classList.add('fade-out');
            setTimeout(() => {
                appModal.style.display = 'none';
                appModal.classList.remove('fade-out');
                const volunteerForm = document.getElementById('volunteerForm');
                if (volunteerForm) volunteerForm.reset();
            }, 200);
        }
        
        if (successModal && event.target === successModal) {
            successModal.classList.add('fade-out');
            setTimeout(() => {
                successModal.style.display = 'none';
                successModal.classList.remove('fade-out');
            }, 200);
        }
    });
});
// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = this.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'translateY(9px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'translateY(-9px) rotate(-45deg)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Reset hamburger icon
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.eco-header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
    } else {
        header.style.padding = '15px 0';
    }
});


// Scroll up functionality
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

