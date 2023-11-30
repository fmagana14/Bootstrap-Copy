const header = document.getElementsByClassName("navbar")[0];
const nav = document.getElementsByClassName("navbar")[0];
let scrollHeight = 0;
let width = window.innerWidth;

// ***** show/hide nav on scroll *****
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollHeight > 650) {
    header.classList.add("scroll-header");
  } else if (scrollHeight < 550) {
    header.classList.remove("scroll-header");
  }

  if (scrollHeight > scrollY) {
    header.classList.add("hide-header");
  } else {
    header.classList.remove("hide-header");
  }





//   if (window.innerWidth < 480 && window.scrollY < 80) {
//     header.classList.remove("hide-header");
//   }

  scrollHeight = scrollY;
});