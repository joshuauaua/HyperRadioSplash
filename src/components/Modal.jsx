import React, { useEffect, useState } from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose }) {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const payload = { firstName, lastName, email };

    try {
      const response = await fetch("http://localhost:5016/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Successfully registered!");
        setFirstName("");
        setLastName("");
        setEmail("");
        onClose(); 
      } else {
        alert("Failed to register. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${show ? "slide-in" : "slide-out"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Join the Waitlist</h2>
        <p>Sign up to get early access to Hyper Radio.</p>

        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
            <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <button className="modal-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}