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

  fetch('https://magenta-rose-raven-hat.cyclic.app/contact', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      if (data.contact) {
          updateDisplayForm(data.contact);
          sessionStorage.setItem('contactData', JSON.stringify(data.contact));
      }
      console.log('Success:', data);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});

function updateDisplayForm(contact) {
  document.getElementById('displayFirstName').textContent = contact.firstName;
  document.getElementById('displayLastName').textContent = contact.lastName;
  document.getElementById('displayPhoneNumber').textContent = contact.phoneNumber;
  document.getElementById('displayEmail').textContent = contact.email;
  document.getElementById('displaySubject').textContent = contact.subject;
  document.getElementById('displayCompany').textContent = contact.company;
  document.getElementById('displayMessage').textContent = contact.message;
}

window.onload = () => {
  const savedData = JSON.parse(sessionStorage.getItem('contactData'));
  if (savedData) {
      updateDisplayForm(savedData);
  }
};
