document.addEventListener("DOMContentLoaded", function () {
 // Fungsi untuk mengirim formulir ke server
  const submitForm = async () => {
    try {
       // Mengambil nilai dari input formulir
      const formData = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        company: document.getElementById("company").value,
        message: document.getElementById("message").value,
      };

      // Mengirim data ke server menggunakan Axios
      const response = await axios.post(
        "https://magenta-rose-raven-hat.cyclic.app/api/contact/submit",
        formData,
        {
          withCredentials: true,
        }
      );
      
      // Memperbarui tampilan dengan data yang diterima dari server
      updateDisplay(response.data);
    } catch (error) {
      console.error(error);
      // Menangani error, misalnya, menampilkan pesan error kepada pengguna
    }
  };

   // Fungsi untuk memperbarui tampilan dengan data yang diterima dari server
  const updateDisplay = (data) => {
    document.getElementById("displayFirstName").innerText = data.fname;
    document.getElementById("displayLastName").innerText = data.lname;
    document.getElementById("displayPhoneNumber").innerText = data.phone;
    document.getElementById("displayEmail").innerText = data.email;
    document.getElementById("displaySubject").innerText = data.subject;
    document.getElementById("displayCompany").innerText = data.company;
    document.getElementById("displayMessage").innerText = data.message;

    // Menampilan section display
    document.getElementById("showData").style.display = "block";
  };

  // Menangkap pengiriman formulir
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    submitForm();
  });
});
