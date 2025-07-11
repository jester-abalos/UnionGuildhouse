  // Initialize EmailJS
        (function() {
            emailjs.init("oNr9W0Jda6zBQX8CI");
        })();

        // Modal Control
        const modal = document.getElementById('terms-modal');
        const openModalLink = document.getElementById('open-modal');
        const closeModalButton = document.getElementById('close-modal');
        const modalAgreeButton = document.getElementById('modal-agree-button');
        const modalBody = document.querySelector('.modal-body');
        const termsCheckbox = document.getElementById('agree-checkbox');
        const contactTermsCheckbox = document.getElementById('contact-terms-checkbox');
        const submitButton = document.getElementById('submit-button');

        openModalLink.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        // Scroll Tracking for Terms
        modalBody.addEventListener('scroll', () => {
            const scrollBottom = modalBody.scrollHeight - modalBody.clientHeight - 10;
            if (modalBody.scrollTop >= scrollBottom) {
                termsCheckbox.disabled = false;
                modalAgreeButton.disabled = false;
            }
        });

        // Sync Checkboxes
        termsCheckbox.addEventListener('change', () => {
            contactTermsCheckbox.checked = termsCheckbox.checked;
            updateSubmitButton();
        });

        // Agree Button in Modal
        modalAgreeButton.addEventListener('click', () => {
            if (termsCheckbox.checked) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        // Enable Submit Button
        function updateSubmitButton() {
            submitButton.disabled = !contactTermsCheckbox.checked;
        }

        // Contact Form Submission
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (contactTermsCheckbox.checked) {
                emailjs.sendForm("TogetherweFly!2025", "template_pp588ci", this)
                    .then(function(response) {
                        alert(`Thank you, ${contactForm.first_name.value}! Your inquiry has been submitted. We'll get back to you at ${contactForm.email.value}.`);
                        contactForm.reset();
                        termsCheckbox.checked = false;
                        contactTermsCheckbox.checked = false;
                        termsCheckbox.disabled = true;
                        modalAgreeButton.disabled = true;
                        submitButton.disabled = true;
                    }, function(error) {
                        alert("Failed to send. Please try again.");
                        console.error("EmailJS error:", error);
                    });
            }
        });