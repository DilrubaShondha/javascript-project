let images = [
  "./image/img_1.jfif",
  "./image/img_2.jfif",
  "./image/img_3.jfif",
  "./image/img_4.jfif",
];
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let img = document.querySelector(".slide-img");
let count = 0;
prev.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = images.length - 1;
    img.src = images[count];
  } else {
    img.src = images[count];
  }
});
next.addEventListener("click", () => {
  count++;
  if (count > images.length - 1) {
    count = 0;
    img.src = images[count];
  } else {
    img.src = images[count];
  }
});