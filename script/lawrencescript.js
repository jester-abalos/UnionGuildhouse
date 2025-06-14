// Audio Toggle
        let audioEnabled = false;
        const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
        audio.loop = true;
        audio.volume = 0.3; // Lower volume for subtlety

        function toggleAudio() {
            audioEnabled = !audioEnabled;
            const toggleBtn = document.querySelector('.audio-toggle');
            toggleBtn.innerHTML = audioEnabled ? '🔇' : '🔊';
            if (audioEnabled) {
                audio.play().catch(e => console.log('Audio play failed:', e));
            } else {
                audio.pause();
            }
        }

        // Smooth Scroll for Navigation
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Form Submission with Basic Validation
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            if (name && email && message) {
                alert('Message sent! (This is a demo)');
                this.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });

        // Parallax and Fade on Scroll
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const offset = window.innerHeight * 0.8;
                if (rect.top < offset && rect.bottom > 0) {
                    section.style.opacity = 1;
                    section.style.transform = 'translateY(0)';
                } else {
                    section.style.opacity = 0.4;
                    section.style.transform = 'translateY(30px)';
                }
            });
        });

        // Initialize Section Animations
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = 0.4;
            section.style.transform = 'translateY(30px)';
        });

        // Trigger Scroll Event on Load
        window.dispatchEvent(new Event('scroll'));

        // Portfolio Item Click Handler
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', () => {
                const text = item.querySelector('.portfolio-overlay p').textContent;
                alert(`Clicked: ${text} (Demo link)`);
            });
        });