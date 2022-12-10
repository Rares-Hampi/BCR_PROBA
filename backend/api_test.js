/*
 * get2
 *
 * get
 */
const axios = require('axios');
// const e = require('express');

// const get = async () => {
//   const { data } = await axios.get("http://localhost:3000", {
//     headers: {
//       accept: "aplication/json",
//     }js
//   })
//   return data;

// }
// console.log(get())
const func = ()=>{
axios.get("http://localhost:3000")
  .then(resp => {
    data = resp.data;
    data.forEach(e => {
        console.log(`${e.brn}`)

    });

  })

  .catch(error => {
      console.log(error);

  });}
  func()
