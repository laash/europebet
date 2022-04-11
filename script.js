var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
const slider = document.querySelector(".slider-js");
const progressBar = document.querySelector(".sliderline-js");

let sliderGrabbed = false;

slider.parentElement.addEventListener("scroll", (e) => {
  progressBar.style.width = `${getScrollPercentage()}%`;
});

slider.addEventListener("mousedown", (e) => {
  sliderGrabbed = true;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseup", (e) => {
  sliderGrabbed = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseleave", (e) => {
  sliderGrabbed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (sliderGrabbed) {
    slider.parentElement.scrollLeft -= e.movementX;
  }
});

slider.addEventListener("wheel", (e) => {
  e.preventDefault();
  slider.parentElement.scrollLeft += e.deltaY;
});

function getScrollPercentage() {
  return (
    (slider.parentElement.scrollLeft /
      (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) *
    100
  );
}
