import React, { useRef, useState } from "react";
import '../../App.css';

export default function RegisterForm({ onSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  
  const submitForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.value;


    const formData = {
      email,
      password,
      name,
      description,
      image,
    };

    onSubmit(formData);
  };

  return (
    <div className="app-container">
      <form>
      <fieldset>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Enter name."
            required
            ref={nameRef}
            id="name"
            type="name"
            name="name"
            autoComplete="off"
            
          />
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter email."
            required
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            autoComplete="off"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="description">Description</label>
          <input
            placeholder="Enter description."
            required
            ref={descriptionRef}
            id="description"
            type="text"
            name="description"
            autoComplete="off"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="image">Image</label>
          <input
            placeholder="Enter image."
            required
            ref={imageRef}
            id="image"
            type="text"
            name="image"
            autoComplete="off"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            required
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            placeholder="Enter password."
          />
        </fieldset>
        <button onClick={submitForm}>Register</button>
      </form>
    </div>
  );
}
