import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.init";


function Login() {

  const handleLoginWithEmailAndPassword = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      if (!result.user.emailVerified) {
        alert('Please go to your gmail and verify your email')
        return user;
      }
        console.log(user);
      
    }).catch((error) =>
    console.log(error))
  }
  


  return (
    <div className="mx-auto text-center py-20">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleLoginWithEmailAndPassword}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <legend className="fieldset-legend text-2xl">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Enter your email"
            name="email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Enter your password"
            name="password"
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
      <div className="py-8">
        <Link to="/register">
          <button className=" text-white underline border-[#e5e5e5]">
            Don’t have an account? Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
