

// axios
//   .get("http://localhost:3000/serviceResponse")
//   .then((resp) => {
//     data = resp.data;
//     data.forEach((elem) => {
//       console.log(`${elem.br_street}`);
//     });
//   })

//   .catch((error) => {
//     console.log(error);
//   });
let judet = 'Buzau';
const input = document.getElementById("judet");
const section = document.getElementById("section");
input.addEventListener("change", e =>{
  e.preventDefault();
  input.value = e.target.value;
let arr = [];
axios
  .get("http://localhost:3000/serviceResponse")
  .then((resp,data) => {
    data = resp.data;
    data.forEach((elem) => {
      
      if(input.value === elem.br_city){
       let p = document.createElement('p');
       let elem = document.querySelector('p')
       console.log(p);arr.push(elem);
      let text = document.createTextNode(elem.br_street);
      p.appendChild(text);
      section.appendChild(p);}
     // 
    });
   
    arr.forEach(element => {
    
      if(element.br_city != input.value ){
      section.removeChild(element);
    }
  });
  
  })
  

  .catch((error) => {
    console.log(error);
  });
})
