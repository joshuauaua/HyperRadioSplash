import React, { useEffect, useState } from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState(""); // new state
  const [success, setSuccess] = useState(false); // track success

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
      setNotification(""); // clear messages when modal opens
      setSuccess(false);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    const payload = { name, email };

    try {
      const response = await fetch("http://localhost:5016/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccess(true);
        setNotification("You have successfully joined the waitlist!");
        setName("");
        setEmail("");
      } else {
        const errorData = await response.json();
        setSuccess(false);
        setNotification(
          errorData?.message || "Failed to register. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccess(false);
      setNotification("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${show ? "slide-in" : "slide-out"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        {!success ? (
          <>
            <h2>Join the Waitlist</h2>
            <p>Sign up to get early access to Hyper Radio.</p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
          </>
        ) : (
          <div className="success-message">
            <h2>🎉 Thank you!</h2>
            <p>You’ve successfully joined the Hyper Radio waitlist.</p>
            <button className="modal-btn" onClick={onClose}>
              Close
            </button>
          </div>
        )}

        {notification && !success && (
          <p className="error-message">{notification}</p>
        )}
      </div>
    </div>
  );
}