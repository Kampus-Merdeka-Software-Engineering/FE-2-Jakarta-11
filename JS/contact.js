document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const showDataSection = document.querySelector('.show-data');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Constructing the form data object
        const formDataObj = {
            'First Name': document.querySelector('.fname').value,
            'Last Name': document.querySelector('.lname').value,
            'Contact Number': document.querySelector('#phoneNum').value,
            Email: document.querySelector('#email').value,
            Subject: document.querySelector('.subject').value,
            'Company Name': document.querySelector('.company1').value,
            Message: document.querySelector('textarea[name="message"]').value
        };

        // Sending data to the server
        fetch('https://magenta-rose-raven-hat.cyclic.app/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObj),
        })
        .then(response => response.json())
        .then(data => {
            // Display the response data without the ID
            const userData = data.data;
            showDataSection.innerHTML = `
                <div class="sign-box">
                    <h1>Send Successfully</h1>
                    <h3>First Name: <p>${userData['First Name']}</p></h3>
                    <h3>Last Name: <p>${userData['Last Name']}</p></h3>
                    <h3>Contact Number: <p>${userData['Contact Number']}</p></h3>
                    <h3>Email: <p>${userData.Email}</p></h3>
                    <h3>Subject: <p>${userData.Subject}</p></h3>
                    <h3>Company Name: <p>${userData['Company Name']}</p></h3>
                    <h3>Your Message: <p>${userData.Message}</p></h3>
                </div>
            `;
            showDataSection.style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
    });
});
