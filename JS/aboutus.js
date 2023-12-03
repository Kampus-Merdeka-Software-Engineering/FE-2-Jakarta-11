document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        const navLink = document.querySelector(".nav__member a[href*=" + sectionId + "]");
        if (navLink) {
          navLink.classList.add("active-link");
        }
      } else {
        const navLink = document.querySelector(".nav__member a[href*=" + sectionId + "]");
        if (navLink) {
          navLink.classList.remove("active-link");
        }
      }
    });
  }

  function scrollHeader() {
    const nav = document.querySelector(".navigationn");
    if (nav) {
      if (this.scrollY >= 200) nav.classList.add("scroll-header");
      else nav.classList.remove("scroll-header");
    }
  }

  function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    if (scrollTop) {
      if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
      else scrollTop.classList.remove("show-scroll");
    }
  }

  function getCurrentTheme() {
    return document.body.classList.contains(darkTheme) ? "dark" : "light";
  }

  function getCurrentIcon() {
    return themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";
  }

  const themeButton = document.getElementById("theme-button");
  const darkTheme = "dark-theme";
  const iconTheme = "bx-sun";

  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    if (themeButton) {
      themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](iconTheme);
    }
  }

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    });
  }

  const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(
    `.home__data, .home__img,
        .about__data, .about__img,
        .services__content, .member__content,
        .app__data, .app__img,
        .since__data, .since__button,
        .footer__content`,
    {
      interval: 200,
    }
  );

  window.addEventListener("scroll", scrollActive);
  window.addEventListener("scroll", scrollHeader);
  window.addEventListener("scroll", scrollTop);
});
