const onButton = document.getElementById("on");
const offButton = document.getElementById("off");
const fadeElements = document.querySelectorAll(".fade");
const lamps = document.querySelectorAll(".lamp");
const sizeRange = document.getElementById("size");
const durationRange = document.getElementById("duration");
// Create an array of random delays
const delays = [3, 4, 1, 2, 6, 5];

sizeRange.addEventListener("change", changeSize);
durationRange.addEventListener("change", (e) => {});
onButton.addEventListener("click", startAnimation);
offButton.addEventListener("click", stopAnimation);

function stopAnimation() {
  fadeElements.forEach((fade) => {
    fade.style.removeProperty("animation");
    fade.style.display = "none";
  });
}
function startAnimation() {
  // Loop through elements and assign a random delay to each element
  fadeElements.forEach((fade) => {
    const randomDelay = delays[Math.floor(Math.random() * delays.length)];
    fade.style.animation = "fade ease-in-out 2s infinite alternate";
    fade.style.display = "block";
    // Set the delay on the element's style object
    fade.style.animationDelay = `${randomDelay}s`;
  });
}
function changeSize() {
  lamps.forEach((lamp) => {
    lamp.style.setProperty("width", `${e.target.value}px`);
    lamp.style.setProperty("height", `${e.target.value}px`);
  });
}
function changeDurantion() {
  fadeElements.forEach((fade) => {
    fade.style.animationDuration = `${e.target.value}s`;
  });
}
