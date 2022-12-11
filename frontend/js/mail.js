let text1;
const nume = document.getElementById("nume");
const nume_bcr = document.getElementById("nume_bcr");
const locatie = document.getElementById("locatie");
const data = document.getElementById("data");
const ora = document.getElementById("ora");
const adresa = document.getElementById("adresa");

text1 = document.createTextNode(window.localStorage.getItem("NUME"));
nume_bcr.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Prenume"));
nume.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Strada"));
locatie.appendChild(text1);
text1 = document.createTextNode(window.localStorage.getItem("Strada"));
adresa.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Data"));
data.appendChild(text1);

text1 = document.createTextNode(window.localStorage.getItem("Ora"));
ora.appendChild(text1);
