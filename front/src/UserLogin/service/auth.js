import { db } from "./userData";
import axios from "axios";

export const loginUser = (formData) => {
  axios.post("http://localhost:5000/login", 
  formData
)
.then(function (response) {
  console.log(response.data);
  if (response.data === "login"){
    console.log ({email: formData['email'], password: formData['password']});
    return {email: formData['email'], password: formData['password']}
  }
})
.catch(function (error) {
  console.log(error);
});
};

export const registerUser = (formData) => {
  axios.post("http://localhost:5000/register", formData);
  console.log(formData);
};

export const getUser = (userId) => {
  return db.users.find((user) => user.id === userId);
};

