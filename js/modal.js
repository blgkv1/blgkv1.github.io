const orderBtn = document.querySelector(".hero-button");
const closeBtn = document.querySelector(".modal-close-button");

orderBtn.addEventListener("click", () => {
  document.body.classList.add("is-modal-open");
});
closeBtn.addEventListener("click", () => {
  document.body.classList.remove("is-modal-open");
});

document.getElementById("checkbox").addEventListener("change", (e) => {
  console.log("Checkbox checked:", e.target.checked);
});
// remove
