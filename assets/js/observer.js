const header = document.querySelector("header");
const sectionOne = document.querySelector(".advertencia_nicotina_phone");
const sectionTwo = document.querySelector("#intro");
const sectionThree = document.querySelector("#sidebar");

const sectionOneOptions = {
  rootMargin: "0.5px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
  entries,
  sectionOneObserver,
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.style.position = "fixed";
      // sectionTwo.style.margin = "48px 0px 0px 0px";
      // sectionThree.style.position = "fixed";
      sectionTwo.classList.add("no_margin")
      sectionThree.classList.add("fixed_position")
    } else {
      header.style.position = "relative";
      // sectionTwo.style.margin = "0px 0px 0px 0px";
      // sectionThree.style.position = "relative";
      sectionTwo.classList.remove("no_margin")
      sectionThree.classList.remove("fixed_position")
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

