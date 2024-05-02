// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Display a thank you message
    alert('Thank you for your message! We will get back to you soon.');

    // Reset the form fields
    document.getElementById('contact-form').reset();
});
