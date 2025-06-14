// Initialize EmailJS
  (function() {
    emailjs.init("oNr9W0Jda6zBQX8CI"); // Replace with your Public Key from EmailJS
  })();

  // Handle form submission
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page refresh

    emailjs.sendForm("TogetherweFly!2025", "template_pp588ci", this) // Replace service_xxxxxx with actual ID
      .then(function(response) {
        alert("We received your response!");
      }, function(error) {
        alert("Failed to send. Please try again.");
        console.error("EmailJS error:", error);
      });
  });