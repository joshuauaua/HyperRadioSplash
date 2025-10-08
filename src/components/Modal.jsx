import React, { useEffect, useState } from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10); 
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

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

        <form className="modal-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}