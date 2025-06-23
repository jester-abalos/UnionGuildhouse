// Scroll-Reveal Animation
        const reveals = document.querySelectorAll('.reveal');
        window.addEventListener('scroll', () => {
            reveals.forEach(item => {
                const trigger = window.innerHeight - item.getBoundingClientRect().top;
                if (trigger > 100) {
                    item.classList.add('active');
                }
            });
        });

        // Portfolio Filtering
        const filterButtons = document.querySelectorAll('.portfolio-filters button');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Portfolio Modal
        const modal = document.getElementById('modal');
        const modalImg = modal.querySelector('img');
        const modalTitle = modal.querySelector('h3');
        const modalDesc = modal.querySelector('p');
        const closeModal = modal.querySelector('.close');

        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                modalImg.src = item.querySelector('img').src;
                modalTitle.textContent = item.querySelector('.overlay span').textContent;
                modalDesc.textContent = 'Description of ' + modalTitle.textContent;
                modal.style.display = 'flex';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Testimonials Carousel
        const testimonials = document.querySelectorAll('.testimonial');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonials.forEach(t => t.classList.remove('active'));
            testimonials[index].classList.add('active');
        }

        prevButton.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });

        nextButton.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });

        // Form Validation
        const form = document.getElementById('contact-form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;

            // Name validation
            if (nameInput.value.trim().length < 2) {
                nameError.style.display = 'block';
                valid = false;
            } else {
                nameError.style.display = 'none';
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailError.style.display = 'block';
                valid = false;
            } else {
                emailError.style.display = 'none';
            }

            // Message validation
            if (messageInput.value.trim().length < 10) {
                messageError.style.display = 'block';
                valid = false;
            } else {
                messageError.style.display = 'none';
            }

            if (valid) {
                alert('Form submitted successfully!');
                form.reset();
            }
        });