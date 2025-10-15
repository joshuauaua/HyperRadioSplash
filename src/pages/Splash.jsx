import LiquidEther from "../components/LiquidEther.jsx";
import "./Splash.css";
import Modal from "/src/components/Modal.jsx";
import { useState } from "react"
import logo from "/src/assets/logo.svg"


export default function Splash() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="splash-container">
        {/* Background */}
        <div className="Background">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={250}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.7}
            isBounce={true}
            autoDemo={true}
            autoSpeed={0.1}
            autoIntensity={6.2}
            takeoverDuration={0.25}
            autoResumeDelay={10}
            autoRampDuration={0.6}
          />
        </div>

        <div className="splash-card">
          <img
            className="card-logo"
            src={logo}
            alt-text="Hyper Radio Logo"
          />
        </div>

        {/* Centered content */}
        <main className="splash-main">
          <div className="splash-text">
            <h1 className="splash-title">The Sound Of Local</h1>
            <p className="splash-description">
            A new kind of music platform — centered on artists, powered by communities.
            </p>
          </div>

          <button className="btn" onClick={() => setIsModalOpen(true)}>
            Join Waitlist
          </button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

         
        </main>
        <footer className="splash-footer">
            Decentralized • Creator-Driven • Community-Powered
          </footer>
      </div>
    </>
  );
}
