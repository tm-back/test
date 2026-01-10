// Website: visienco.ch
// Minimal JS for small enhancements (no heavy frameworks)
// Update footer year
const y=document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
// Optional: smooth scroll for demo links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{ const t=document.querySelector(a.getAttribute('href')); if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }});
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
            
            mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });
    }

    // Contact Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const status = document.getElementById('form-status');
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            // Disable button to prevent multiple submissions
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            status.textContent = ""; // Clear previous messages
            
            // Gather data
            const formData = new FormData(contactForm);
            
            // ------------------------------------------------------------------
            // CONFIGURATION:
            // 1. Go to https://formspree.io/ and create a free account.
            // 2. Create a new form and copy the "Endpoint" URL.
            // 3. Paste the URL below in the 'endpoint' variable.
            // ------------------------------------------------------------------
            const endpoint = "https://formspree.io/f/xgoowrve"; 
            
            try {
                if (endpoint.includes('YOUR_FORM_ID')) {
                    throw new Error('Please configure the contact form endpoint in script.js (see comments)');
                }

                const response = await fetch(endpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    status.textContent = "Thanks for your message! We'll get back to you soon.";
                    status.style.color = "green";
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    if (Object.hasOwnProperty.call(data, 'errors')) {
                        status.textContent = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.textContent = "Oops! There was a problem submitting your form";
                    }
                    status.style.color = "red";
                }
            } catch (error) {
                status.textContent = "Error: " + error.message;
                status.style.color = "red";
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }
});
