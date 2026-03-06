import HealthBar from "./HealthBar";

import goblin from "../assets/goblin.png";
import wolf from "../assets/wolf.png";
import snake from "../assets/snake.png";
import dragon from "../assets/dragon.png";

export default function EnemyCard({ enemy }) {

  if (!enemy) return null;

  const enemyImages = {
    Goblin: goblin,
    Wolf: wolf,
    Snake: snake,
    Dragon: dragon
  };

  const image = enemyImages[enemy.name] || goblin;

  return (
    <div
      style={{
        border: "3px solid #b91c1c",
        background: "#1f2937",
        color: "white",
        padding: 20,
        width: 280,
        borderRadius: 10,
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)"
      }}
    >

      <h2 style={{marginBottom:10}}>
        👾 {enemy.name}
      </h2>

      <img
        src={image}
        alt={enemy.name}
        style={{
          width: 120,
          marginBottom: 15
        }}
      />

      <p>Health</p>
      <HealthBar value={enemy.health} max={100} />

      <p style={{marginTop:10}}>
        Strength: {enemy.strength}
      </p>

    </div>
  );
}