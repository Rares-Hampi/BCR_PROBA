const axios = require("axios");

axios
  .get("http://localhost:3000/serviceResponse")
  .then((resp) => {
    data = resp.data;
    data.forEach((elem) => {
      console.log(`${elem.br_street}`);
    });
  })

  .catch((error) => {
    console.log(error);
  });
