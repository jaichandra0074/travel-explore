import { useState } from "react";
import api from "../services/api";
import { useNavigate }
from "react-router-dom";

function Register() {

 const navigate = useNavigate();

 const [user,setUser] =
 useState({
  name:"",
  email:"",
  password:""
 });

 function handleChange(e){

 setUser({
   ...user,
   [e.target.name]:
   e.target.value
 });
 }

 async function handleSubmit(e){

 e.preventDefault();

 await api.post(
 "/users",
 user
 );

 navigate("/login");
 }

 return(
 <div className="auth-container">
 <div className="auth-card">

 <h1>Register</h1>

 <form onSubmit={handleSubmit}>

 <input
 name="name"
 placeholder="Name"
 onChange={handleChange}
 />

 <input
 name="email"
 placeholder="Email"
 onChange={handleChange}
 />

 <input
 name="password"
 type="password"
 placeholder="Password"
 onChange={handleChange}
 />

 <button
 className="auth-btn"
 >
 Register
 </button>

 </form>

 </div>
 </div>
 );
}

export default Register;