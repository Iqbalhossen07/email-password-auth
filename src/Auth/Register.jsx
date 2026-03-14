import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.init";


function Register() {

    const handleSubmitForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

      console.log(name, email, password);
      
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {

      
        const user = userCredential.user;
        sendEmailVerification(auth.currentUser).then(() => {
          alert('Email verification sent')
        })
        console.log(user);
      }).catch((error) => {
      console.log(error);
    })
    
      
    }



  return (
    <div className="mx-auto text-center py-20">
      <form
        onSubmit={handleSubmitForm}
        className="flex justify-center items-center"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-2xl">Register</legend>

          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter your name"
            name="name"
          />

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

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
      <div className="py-8">
        <Link to="/login">
          <button className="underline  text-white border-[#e5e5e5]">
            Already have an account? Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
