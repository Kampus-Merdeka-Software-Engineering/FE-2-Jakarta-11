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

  axios.post('https://magenta-rose-raven-hat.cyclic.app/contact/submit', data)
    .then(response => {
      console.log('Success:', response.data);

      // Dapatkan elemen showData
      const showData = document.getElementById('showData');
      
      // Tampilkan data pada showData
      showData.innerHTML = `
        <h1>Send Successfully</h1>
        <h3>First Name: <p>${data.firstName}</p></h3>
        <h3>Last Name: <p>${data.lastName}</p></h3>
        <h3>Contact Number: <p>${data.phoneNumber}</p></h3>
        <h3>Email: <p>${data.email}</p></h3>
        <h3>Subject: <p>${data.subject}</p></h3>
        <h3>Company Name: <p>${data.company}</p></h3>
        <h3>Your Message: <p>${data.message}</p></h3>
      `;

      // Tampilkan showData
      showData.style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);

      // Jika ada kesalahan, tampilkan pesan gagal pada showData
      const showData = document.getElementById('showData');
      showData.innerHTML = '<h1>Failed to Send</h1>';
      showData.style.display = 'block';
    });
});
