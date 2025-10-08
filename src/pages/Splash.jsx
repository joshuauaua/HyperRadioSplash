import LiquidEther from "../components/LiquidEther.jsx";
import "./Splash.css";

export default function Splash() {
  return (
    <>
      <div className="splash-container">
        {/* Background */}
        <div className="Background">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        {/* Card at top */}
        <div className="splash-card">
          <div className="card-container">
            <img className="card-logo" src="/src/assets/logo.svg" alt-text="Hyper Radio Logo" />
          </div>{" "}
          
        </div>

        {/* Centered content */}
        <main className="splash-main">
          <div className="splash-text">
            <h1 className="splash-title">The Sound Of Local</h1>
            <p className="splash-description">
              A New Kind of Platform — Built for Local Music, Reinvented with
              Decentralized Technology.
            </p>
          </div>

          <button className="btn">Join Waitlist</button>

          <span className="splash-subdescription">
            Decentralized • Creator-Driven • Community-Powered
          </span>
        </main>
      </div>
    </>
  );
}
