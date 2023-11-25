document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const showDataDiv = document.getElementById('user-data-display');

    // Function to post data to server and display response
    function postData(formDataObj) {
        fetch('https://magenta-rose-raven-hat.cyclic.app/submit', { // Ganti dengan URL server Anda
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObj),
        })
        .then(response => response.json())
        .then(data => {
            showDataDiv.innerHTML = `
                <div class="sign-box">
                    <h1>Send Successfully</h1>
                    ${Object.entries(data.data).map(([key, value]) => `<p>${key}: ${value}</p>`).join('')}
                </div>
            `;
        })
        .catch(error => console.error('Error posting data:', error));
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData);
        postData(formDataObj);
    });
});
