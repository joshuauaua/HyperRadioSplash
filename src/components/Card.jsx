import { GlassCard } from "@developer-hub/liquid-glass";
import "./Card.css";

export default function Card() {
  return (
    <GlassCard>
      <div className="card-container">
        <h2 className="card-logo">Hyper Radio</h2>
        <div className="card-btn">
          <button>Join Waitlist</button>
        </div>
      </div>
    </GlassCard>
  );
}