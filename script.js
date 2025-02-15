const gallery = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementsByClassName("close")[0];

gallery.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == lightbox) {
    lightbox.style.display = "none";
  }
});
