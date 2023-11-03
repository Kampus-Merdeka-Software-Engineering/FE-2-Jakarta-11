
  document.addEventListener('DOMContentLoaded', function() {
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');

    // Fungsi untuk mengubah format tanggal
    function formatDate(date) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return date.toLocaleDateString(undefined, options);
    }

    // Tambahkan event listener untuk mengubah format tanggal saat input berubah
    checkInInput.addEventListener('input', function() {
      const selectedDate = new Date(checkInInput.value);
      checkInInput.value = formatDate(selectedDate);
    });

    checkOutInput.addEventListener('input', function() {
      const selectedDate = new Date(checkOutInput.value);
      checkOutInput.value = formatDate(selectedDate);
    });
  });


  function increment(inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.value = parseInt(inputElement.value) + 1;
  }
  
  function decrement(inputId) {
    const inputElement = document.getElementById(inputId);
    if (parseInt(inputElement.value) > 1) {
      inputElement.value = parseInt(inputElement.value) - 1;
    }
  }
  


