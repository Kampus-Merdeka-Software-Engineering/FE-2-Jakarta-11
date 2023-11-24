document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const showDataSection = document.querySelector('.show-data');

    // Function to post data to server (POST)
    function postData(formDataObj) {
        fetch('https://magenta-rose-raven-hat.cyclic.app/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObj),
        })
        .then(response => response.json())
        .then(data => {
            // Tampilkan data yang baru saja disubmit
            const userData = formDataObj;
            showDataSection.innerHTML = `
                <div class="sign-box">
                    <h1>Send Successfully</h1>
                    <h3>First Name: <p>${userData.fname}</p></h3>
                    <h3>Last Name: <p>${userData.lname}</p></h3>
                    <h3>Contact Number: <p>${userData.phone}</p></h3>
                    <h3>Email: <p>${userData.email}</p></h3>
                    <h3>Subject: <p>${userData.subject}</p></h3>
                    <h3>Company Name: <p>${userData.company}</p></h3>
                    <h3>Your Message: <p>${userData.message}</p></h3>
                </div>
            `;

            // Tampilkan "SECTION DISPLAY FORM" setelah formulir dikirim
            showDataSection.style.display = 'block';
        })
        .catch(error => console.error('Error posting data:', error));
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Mendapatkan data dari formulir
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData);

        // Mengirimkan data ke server melalui API (POST) dan menampilkan di front-end
        postData(formDataObj);
    });

    // Sembunyikan "SECTION DISPLAY FORM" jika data sebelumnya sudah ada saat halaman dimuat
    if (showDataSection.innerHTML.trim() !== '') {
        showDataSection.style.display = 'none';
    }

    // Handle event saat halaman direfresh manual
    window.addEventListener('beforeunload', function() {
        // Sembunyikan "SECTION DISPLAY FORM" sebelum halaman direfresh
        showDataSection.style.display = 'none';
    });
});