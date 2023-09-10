import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    navigate('/')
  }

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      navigate('/connect-fb');
      console.log(userCredential);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="bg-white py-10 px-10 rounded-xl ">
        <h2 className="mt-1 mb-3 pb-3 px-16 text-2xl text-center">
          Login to your Account
        </h2>
        <form className="flex flex-col" onSubmit={logIn}>
          <label className="text-xl">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="border-2 rounded-md mb-2"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label className="text-xl">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="border-2 rounded-md mb-2"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <div className="mb-2">
            <input className="mr-2" type="checkbox" name="rememberMe" />
            <label className="text-xl">Remember Me</label>
          </div>
          <button
            className="text-white rounded-md p-2 text-xl bg-[#1e4d91]"
            type="submit"
          >
              Login
          </button>
        </form>
        <div className="mt-2 text-center">
          <p>
            New to MyApp?{" "}
          </p>
            <button className="text-[#1e4d91]" onClick={handleSignup}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
