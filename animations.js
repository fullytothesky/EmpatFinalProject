document.addEventListener("DOMContentLoaded", function () {
  // перевіряю видимість елемента на екрані
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Додаю анімацію для section title
  function handleScroll() {
    const sectionTitles = document.querySelectorAll(
      ".section-title_left-reversed"
    );
    const reversedSectionTitles = document.querySelectorAll(
      ".section-title_right-reversed"
    );
    sectionTitles.forEach(function (sectionTitle) {
      if (isElementInViewport(sectionTitle)) {
        sectionTitle.classList.add("animated");
      } else {
        sectionTitle.classList.remove("animated");
      }
    });

    reversedSectionTitles.forEach(function (reversedSectionTitle) {
      if (isElementInViewport(reversedSectionTitle)) {
        reversedSectionTitle.classList.add("animated");
      } else {
        reversedSectionTitle.classList.remove("animated");
      }
    });
  }

  // обробник подій при скролі
  window.addEventListener("scroll", handleScroll);

  // Викликаємо функцію, щоб активувати анімацію
  handleScroll();

  ////// hamburger-menu

  const burgerMenu = document.querySelector(".burger-menu");

  const burgerMenuLinks = document.querySelector(".burger-menu__links");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    burgerMenuLinks.classList.toggle("active");
  });

  //////faq answer slide

  const questions = document.querySelectorAll(".faq__question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
    });
  });
});
