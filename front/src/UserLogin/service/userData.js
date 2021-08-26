import axios from "axios";


function axiosTest() {
  axios.get("http://localhost:5000/check")
  .then(response => {
    console.log(response.data)
    return response.data
  });
}
const address = axios.get("http://localhost:5000/check")
.then(response => {
  console.log(response.data)
  return response.data
});

const printAddress = async () => {
  const a = await address;
  console.log(a);
  return a;
};

const users = printAddress();

export const db = {
  users,
};

