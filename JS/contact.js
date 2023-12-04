document.addEventListener('DOMContentLoaded', function () {
  const submitForm = async () => {
      try {
          const formData = {
              fname: document.getElementById('fname').value,
              lname: document.getElementById('lname').value,
              phone: document.getElementById('phone').value,
              email: document.getElementById('email').value,
              subject: document.getElementById('subject').value,
              company: document.getElementById('company').value,
              message: document.getElementById('message').value,
          };

          const response = await axios.post('magenta-rose-raven-hat.cyclic.app/api/contact/submit', formData);

          updateDisplay(response.data);
      } catch (error) {
          console.error(error);
          // Handle error accordingly, e.g., show an error message to the user
      }
  };

  const updateDisplay = (data) => {
      document.getElementById('displayFirstName').innerText = data.fname;
      document.getElementById('displayLastName').innerText = data.lname;
      document.getElementById('displayPhoneNumber').innerText = data.phone;
      document.getElementById('displayEmail').innerText = data.email;
      document.getElementById('displaySubject').innerText = data.subject;
      document.getElementById('displayCompany').innerText = data.company;
      document.getElementById('displayMessage').innerText = data.message;

      // Show the display section
      document.getElementById('showData').style.display = 'block';
  };

  // Assuming you have a form with id="contactForm"
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      submitForm();
  });
});
