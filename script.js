document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.querySelector(".contact-form").innerHTML = `
                <div class="success-message">
                    <h2>✔ Message Sent Successfully!</h2>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                    <button onclick="window.location.reload()">OK</button>
                </div>
            `;
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        alert("Something went wrong. Please try again.");
        console.error("Error:", error);
    });
});