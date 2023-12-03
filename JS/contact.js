document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();

  const data = {
    firstName: document.getElementById('fname').value,
    lastName: document.getElementById('lname').value,
    phoneNumber: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    company: document.getElementById('company').value,
    message: document.querySelector('textarea[name="message"]').value
  };

  // Menggunakan Axios untuk mengirim data ke backend
  axios.post('https://magenta-rose-raven-hat.cyclic.app/contact', data)
    .then(response => {
      console.log('Success:', response.data);
      // Memperbarui UI untuk menampilkan data yang disubmit
      updateUI(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

function updateUI(data) {
  // Memperbarui elemen-elemen di "SECTION DISPLAY FORM" sesuai data yang disubmit
  document.getElementById('showData').innerHTML = `
    <h1>Send Successfully</h1>
    <h3>First Name: <p>${data.firstName}</p></h3>
    <h3>Last Name: <p>${data.lastName}</p></h3>
    <h3>Contact Number: <p>${data.phoneNumber}</p></h3>
    <h3>Email: <p>${data.email}</p></h3>
    <h3>Subject: <p>${data.subject}</p></h3>
    <h3>Company Name: <p>${data.company}</p></h3>
    <h3>Your Message: <p>${data.message}</p></h3>
  `;
}
