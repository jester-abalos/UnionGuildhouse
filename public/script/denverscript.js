 // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    });

    // Smooth Scroll
    document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        portfolioItems.forEach(item => {
          item.style.display = filter === 'all' || item.classList.contains(filter) ? 'block' : 'none';
        });
      });
    });
    portfolioItems.forEach(item => item.style.display = 'block');

    // Testimonials Carousel
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.left');
    const nextButton = document.querySelector('.carousel-button.right');
    let currentIndex = 0;

    function showSlide(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
      carouselItems.forEach((item, i) => {
        item.setAttribute('aria-current', i === index ? 'true' : 'false');
      });
    }

    prevButton.addEventListener('click', () => {
      currentIndex = currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
      showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
      currentIndex = currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
      showSlide(currentIndex);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
      currentIndex = currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
      showSlide(currentIndex);
    }, 5000);

    // Initialize first slide
    showSlide(0);

    // Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });