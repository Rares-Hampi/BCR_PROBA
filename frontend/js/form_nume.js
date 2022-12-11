const nume = document.getElementById("lname");
const prenume = document.getElementById("fname");
const form = document.getElementById("form");
const btn = document.getElementById("btn");

nume.addEventListener("change", (e) => {
  e.preventDefault();
  localStorage.setItem("Nume", e.target.value);
});
prenume.addEventListener("change", (e) => {
  e.preventDefault();
  localStorage.setItem("Prenume", e.target.value);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
btn.addEventListener("submit", (e) => {
  e.preventDefault();
});
