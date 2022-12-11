const input = document.getElementById("judet");
const section = document.getElementById("section");
input.addEventListener("change", (e) => {
  e.preventDefault();
  input.value = e.target.value;
  axios
    .get("http://localhost:3000/serviceResponse")
    .then((resp, data) => {
      data = resp.data;
      data.forEach((elem) => {
        if (input.value === elem.br_city) {
          let p1 = document.createElement("p");
          let p2 = document.createElement("p");
          let div = document.createElement("div");
          div.classList.add("show");
          let text = document.createTextNode(elem.br_street);
          let text1 = document.createTextNode(elem.brn);
          p2.appendChild(text1);
          div.appendChild(p2);
          p1.appendChild(text);
          div.appendChild(p1);
          section.appendChild(div);
        }

        let arr = document.querySelectorAll(".show");
        let nume;
        let strada;
        let oras;
        let longitudine;
        let latitude;
        arr.forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();

            localStorage.setItem("NUME", (nume = elem.brn));
            localStorage.setItem("Strada", (strada = elem.br_street));
            localStorage.setItem("Oras", (oras = elem.br_city));
            localStorage.setItem(
              "Latitudine",
              (latitude = elem.location.latitude)
            );
            localStorage.setItem(
              "Longitudine",
              (longitudine = elem.location.longitude)
            );
          });
        });
      });
    })

    .catch((error) => {
      console.log(error);
    });
});
