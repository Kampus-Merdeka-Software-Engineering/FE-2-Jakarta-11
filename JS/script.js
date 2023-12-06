document.addEventListener('DOMContentLoaded', function() {
  function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  const checkInInput = document.getElementById('check-in');
  const checkOutInput = document.getElementById('check-out');

  if (checkInInput) {
    checkInInput.addEventListener('input', function() {
      const selectedDate = new Date(checkInInput.value);
      checkInInput.value = formatDate(selectedDate);
    });
  }

  if (checkOutInput) {
    checkOutInput.addEventListener('input', function() {
      const selectedDate = new Date(checkOutInput.value);
      checkOutInput.value = formatDate(selectedDate);
    });
  }

  function increment(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.value = parseInt(inputElement.value) + 1;
    }
  }

  function decrement(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement && parseInt(inputElement.value) > 1) {
      inputElement.value = parseInt(inputElement.value) - 1;
    }
  }

  // BUTTON HOVER ANIMATION SCRIPT
  console.clear();

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    const div = button.querySelector("div");
    ["mouseenter", "mouseleave"].forEach((event) => {
      button.addEventListener(event, (e) => {
        if (div) {
          div.style.left = `${e.offsetX}px`;
          div.style.top = `${e.offsetY}px`;
        }
      });
    });
  });

  // SLIDER
  const wrapper = document.querySelector(".wrapper");
  const carousel = document.querySelector(".carousel");

  if (carousel) {
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];
    let isDragging = false,
      isAutoPlay = true,
      startX,
      startScrollLeft,
      timeoutId;
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach((card) => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
    };

    autoPlay();
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
  }

  const questions = document.querySelectorAll(".question-answer");

  questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function() {
      questions.forEach(function(item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });
      question.classList.toggle("show-text");
    });
  });

  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // RESPONSIVE NAVBAR
  const navbarToggle = document.getElementById("navbar-toggle");
  const navList = document.querySelector(".nav-list");

  if (navbarToggle && navList) {
    navbarToggle.addEventListener("click", () => {
      navbarToggle.classList.toggle("active");
      navList.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((n) => {
      n.addEventListener("click", () => {
        navbarToggle.classList.remove("active");
        navList.classList.remove("active");
      });
    });
  }
});


var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);


// AOS 

      document.addEventListener('aos:in', ({ detail }) => {
        const animatedElement = detail;
        animatedElement.classList.add('aos-entered');
      });