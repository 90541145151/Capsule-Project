// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'); // Get the form element

    // Listen for form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submit behavior (page reload)

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate form fields (simple check for empty values)
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Create an object with form data (this can be sent to a server)
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Use the Fetch API to simulate form submission to a backend (placeholder URL)
        fetch('https://example.com/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // Simulate a successful response
            alert('Your message has been sent successfully!');
            form.reset(); // Reset form fields
        })
        .catch(error => {
            // Handle errors (e.g., network issues)
            alert('Something went wrong. Please try again later.');
        });
    });
});
