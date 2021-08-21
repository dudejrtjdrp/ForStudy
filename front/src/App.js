import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [image,setImage] = useState('');

  const signUp = () => {
    axios.post("http://localhost:5000/", {email,password,name,description,image});
  }

  return (
    <div className="App">
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
      <input type="button" value="추가" onClick={signUp} />
    </div>
  );
}


export default App;
