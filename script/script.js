function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

  function openModal(url) {
      const modal = document.getElementById("modal");
      const content = document.getElementById("modal-content");
      modal.style.display = "block";
      content.innerHTML = "Loading...";

      fetch(url)
        .then(res => res.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          content.innerHTML = doc.body.innerHTML;
        })
        .catch(err => {
          content.innerHTML = "<p>Failed to load content.</p>";
          console.error(err);
        });
    }

    function closeModal() {
      document.getElementById("modal").style.display = "none";
    }

    
    


    // Optional: Close modal on outside click
    window.onclick = function(event) {
      const modal = document.getElementById("modal");
      if (event.target === modal) {
        closeModal();
      }
    }


   emailjs.init("oNr9W0Jda6zBQX8CI");

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

   emailjs.send("TogetherweFly!2025","template_pp588ci", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("Message failed to send:\n" + error.text);
      });
  });
  