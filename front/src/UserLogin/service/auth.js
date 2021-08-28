import { db } from "./userData";
import axios from "axios";


export const loginUser = async (formData) => {
  const response =  await axios.post("http://localhost:5000/login", 
  formData);

  console.log(response.data);
  if (Number.isInteger(parseInt(response.data[0]))){
    console.log ({email: response.data[1], description: response.data[2], name: response.data[3]});
    return {id:response.data[0], email: response.data[1], description: response.data[2], name: response.data[3], image: response.data[4]};
  }
};

export const getAward = async (formData) => {
  const response =  await axios.post("http://localhost:5000/getAward", 
  formData);
  
  return {name: response.data[0].name, description: response.data[0].description};
  
};

export const getEdulevel = async (formData) => {
  const response =  await axios.post("http://localhost:5000/getEdulevel", 
  formData);
  console.log(response.data)
  return {name: response.data[0].name, major: response.data[0].major, type: response.data[0].type};
  
};
export const getCertificate = async (formData) => {
  const response =  await axios.post("http://localhost:5000/getCertificate", 
  formData);
  
  return {name: response.data[0].name, agency: response.data[0].agency};
  
};
export const getProject = async (formData) => {
  const response =  await axios.post("http://localhost:5000/getProject", 
  formData);
  
  return {name: response.data[0].name, description: response.data[0].description, startdate: response.data[0].startdate, enddate: response.data[0].enddate, url: response.data[0].url};
  
};

export const registerUser = (formData) => {
  axios.post("http://localhost:5000/register", formData);
  console.log(formData);
};


export const getUser = async (formData) => {
  const response =  await axios.post("http://localhost:5000/getUser", 
  formData);
  console.log({id:response.data[0].id, name: response.data[0].name, description: response.data[0].description, image: response.data[0].image});
  return {id:response.data[0].id, name: response.data[0].name, description: response.data[0].description, image: response.data[0].image};
  
};
export const getUserInfo = async () => {
  const response =  await axios.get("http://localhost:5000/check");
  console.log(response.data)
  const data = response.data
  const arr = []
  for(var i=0; i<data.length; i++) {
    arr.push(data[i]);
  }
  console.log(arr)
  return arr;
};
