const email = document.getElementById("email");
const telefon = document.getElementById("telefon");
const form = document.getElementById("form");
const btn = document.getElementById("btn");

email.addEventListener("change", (e) => {
  e.preventDefault();
  localStorage.setItem("Email", e.target.value);
});

telefon.addEventListener("change", (e) => {
  e.preventDefault();
  localStorage.setItem("Telefon", e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
btn.addEventListener("submit", (e) => {
  e.preventDefault();
});
