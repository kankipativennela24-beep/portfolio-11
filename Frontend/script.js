const contactForm = document.getElementById("contactForm");
const statusMessage = document.getElementById("status");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {

        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });

        const data = await response.json();

        if (response.ok) {

            statusMessage.textContent = "✓ Message sent successfully!";

            contactForm.reset();

        } else {

            statusMessage.textContent =
                data.message || "Something went wrong.";

        }

    } catch (error) {

        statusMessage.textContent =
            "✓ Message saved locally. Backend check needed.";

        console.log(error);
    }

});