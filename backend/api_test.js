/*
 * get2
 *
 * get
 */
const axios = require ("axios");

const get = async () => {
  const { data } = await axios.get("https://api.bcr.ro/api/v1/appointments/branches", {
    headers: {
      accept: "aplication/json",
      apiKey: 'Appo!ntm3nt@PikY3'
    }
  })
  return data;

}
console.log(get())
