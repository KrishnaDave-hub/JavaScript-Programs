const current = document.querySelector("#current");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// Set First Image Opacity
img[0].style.opacity = opacity;

imgs.addEventListener("click", imgClick);

function imgClick(e) {
  // Reset The Opacity
  img.forEach((img) => (img.style.opacity = 1));

  // Change Current Image To Source of Clicked Image
  current.src = e.target.src;

  // Add Fade In Class
  current.classList.add("fade-in");

  // Remove Fade-In Class After .5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change The Opacity To Opacity Var
  e.target.style.opacity = opacity;
}
