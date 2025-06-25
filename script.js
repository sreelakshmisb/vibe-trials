document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const inquiryType = document.getElementById('inquiry_type').value;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !inquiryType || !message) {
                alert('Please fill in all fields, including inquiry type.');
                return;
            }

            if (inquiryType === "") {
                alert('Please select an inquiry type.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // If validation passes, you can submit the form data
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', { name, email, inquiryType, message });
            alert('Message sent successfully! (This is a demo)');
            contactForm.reset(); // Clear the form
        });
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
