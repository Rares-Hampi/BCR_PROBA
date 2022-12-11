const txt1 = document.getElementById("txt1");
const nume = document.getElementById("nume");
const strada = document.getElementById("strada");
const oras = document.getElementById("oras");
const lat = document.getElementById("lat");
const long = document.getElementById("long");
const txt3 = document.getElementById("txt3");
const txt4 = document.getElementById("txt4");
const mail = document.getElementById("mail");
const tel = document.getElementById("tel");
const data = document.getElementById("data");

let text1 = document.createTextNode(window.localStorage.getItem("Select1"));
txt1.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("NUME"));
nume.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Strada"));
strada.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Oras"));
oras.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Latitudine"));
lat.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Longitudine"));
long.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Data"));
txt3.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Ora"));
data.appendChild(text1);

text1 = document.createTextNode(
  window.localStorage.getItem("Nume") +
    " " +
    window.localStorage.getItem("Prenume")
);
txt4.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Email"));
mail.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Telefon"));
tel.appendChild(text1);
