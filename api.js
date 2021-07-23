const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".header__icon");
const openBtn = document.querySelector(".createApi");

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
