const input = document.getElementById("date");
const ascuns = document.getElementById("ascuns");
const nonp = document.querySelector(".nonp");

input.addEventListener("click", (e) => {
  e.preventDefault();
  input.showPicker();
});
input.addEventListener("change", (e) => {
  e.preventDefault();
  console.log(e.target.value);
  input.value = e.target.value;
  localStorage.setItem("Data", e.target.value);
  if (input.value != "") {
    ascuns.style.display = "block";
    nonp.style.display = "block";
  } else {
    ascuns.style.display = "none";
    nonp.style.display = "none";
  }
});
let texts = document.querySelectorAll("p");
texts.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    elem.style.backgroundColor = "#1a67d232";
    elem.style.color = "blue";
    localStorage.setItem("Ora", elem.innerText);
  });
});
