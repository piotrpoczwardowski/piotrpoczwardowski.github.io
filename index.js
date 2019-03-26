let firstVisible = document.querySelectorAll(
    ".navigation__logo--image, .navigation__button, .header__picture--image, .header__text--element "
  );
  let visibleOnScrollEl = document.querySelectorAll(
    ".goal__picture--image, .goal__text"
  );
  let cards = document.querySelectorAll(".benefits__card");
  let headerImage = document.querySelector(".header__picture--image");
  let paper1 = document.querySelector(".paper1");
  let paper2 = document.querySelector(".paper2");
  let paper3 = document.querySelector(".paper3");
  let paper4 = document.querySelector(".paper4");
  let paper5 = document.querySelector(".paper5");
  let paper6 = document.querySelector(".paper6");

  function throwPapers() {
    document.querySelectorAll(".paper").forEach(function(el, i) {
      el.style.opacity = 1;

      console.log(i);
      if (i > 2) {
        el.style.transform =
          "translate(60%, -60%) rotate(-5deg) scale(1.05)";
      } else {
        el.style.transform =
          "translate(-60%, -60%) rotate(20deg) scale(1.2)";
      }
    });
  }

  window.onload = function() {
    firstVisible.forEach(function(el) {
      Object.assign(
        el.style,
        { opacity: 1 },
        { transform: "translateY(0px)" }
      );
    });
    throwPapers();
  };

  window.addEventListener("scroll", function() {
    visibleOnScrollEl.forEach(function(el) {
      appearingOnScroll(el);
    });
    cards.forEach(function(el) {
      appearingOnScroll(el);
    });
  });

  function appearingOnScroll(el) {
    if (window.scrollY > el.getBoundingClientRect().y) {
      Object.assign(
        el.style,
        { opacity: 1 },
        { transform: "translateY(0px)" }
      );
    }
  }