import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import Login from "./Login";

function SignUp() {
  const navigate =  useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addUser = async () => {
    const docRef = collection(db,"User_db");
    try {
      await addDoc(docRef, {
        UserName: userName,
        Email: email,
        RememberMe: rememberMe,
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="bg-white py-10 px-10 rounded-xl ">
        <h2 className="mt-1 mb-3 pb-3 px-16 text-2xl text-center">
          Create Account
        </h2>
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            signup(e);
            addUser();
          }}
        >
          <label className="text-xl ">Name</label>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            className="border-2 rounded-md mb-2 w-full"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="text-xl">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="border-2 rounded-md mb-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-xl">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="border-2 rounded-md mb-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mb-2">
            <input
              className="mr-2"
              type="checkbox"
              value={rememberMe}
              onChange={(e) => setRememberMe(!rememberMe)}
            />
            <label className="text-xl">Remember Me</label>
          </div>
          <button
            className="text-white rounded-md w-full p-2 text-xl bg-[#1e4d91]"
            type="submit"
          >
            <a href="/login">Sign Up</a>
          </button>
        </form>
        <div className="mt-2 text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-600">
              login
            </a>
            {/* <button className="text-[#1e4d91]" onClick={navigate("/login")}>login</button> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
