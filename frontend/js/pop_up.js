const input = document.getElementById("date");

input.addEventListener("click", (e) => {
  e.preventDefault();
  input.datepicker();
});
