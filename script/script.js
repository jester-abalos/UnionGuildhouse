
    
    // Modal Control for terms
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
            document.body.style.overflow = 'auto';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
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
                document.body.style.overflow = 'auto';
            }
        });

        // Enable Submit Button
        function updateSubmitButton() {
            submitButton.disabled = !contactTermsCheckbox.checked;
        }

        // Contact Form Submission
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (contactTermsCheckbox.checked) {
                const formData = new FormData(contactForm);
                const data = {
                    first_name: formData.get('first_name'),
                    last_name: formData.get('last_name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    service: formData.get('service'),
                    message: formData.get('message')
                };
                alert(`Thank you, ${data.first_name}! Your inquiry about ${data.service} has been submitted. We'll get back to you at ${data.email}.`);
                contactForm.reset();
                termsCheckbox.checked = false;
                contactTermsCheckbox.checked = false;
                termsCheckbox.disabled = true;
                modalAgreeButton.disabled = true;
                submitButton.disabled = true;
            }
        });
    

        // Modal Control for privacy
                const modals = document.getElementById('privacy-modal');
                const openModalLinks = document.getElementById('open-modal');
                const closeModalButtons = document.getElementById('close-modal');
                const modalBodys = document.querySelector('.modal-body');
                
               
                openModalLinks.addEventListener('click', () => {
                    modals.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                });

                closeModalButtons.addEventListener('click', () => {
                    modals.style.display = 'none';
                    document.body.style.overflow = 'auto';
                });

                modals.addEventListener('click', (e) => {
                    if (e.target === modals) {
                        modals.style.display = 'none';
                        document.body.style.overflow = 'auto';
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
            
  