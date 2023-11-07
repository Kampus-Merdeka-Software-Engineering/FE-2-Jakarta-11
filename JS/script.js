
document.addEventListener("DOMContentLoaded", function () {
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

  const checkInInput = document.getElementById("check-in");
  const checkOutInput = document.getElementById("check-out");

  // Fungsi untuk mengubah format tanggal
  function formatDate(date) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString(undefined, options);
  }

  // Tambahkan event listener untuk mengubah format tanggal saat input berubah
  checkInInput.addEventListener("input", function () {
    const selectedDate = new Date(checkInInput.value);
    checkInInput.value = formatDate(selectedDate);
  });

  checkOutInput.addEventListener("input", function () {
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

// Button Hover animation script
console.clear();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  const div = button.querySelector("div");
  ["mouseenter", "mouseleave"].forEach((event) => {
    button.addEventListener(event, (e) => {
      div.style.left = `${e.offsetX}px`;
      div.style.top = `${e.offsetY}px`;
    });
  });
});





//Slide card
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false,
    isAutoPlay = true,
    startX,
    startScrollLeft,
    timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
    .slice(-cardPerView)
    .reverse()
    .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
};
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
    ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
};
const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

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

