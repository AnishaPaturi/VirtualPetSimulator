import goblin from "../assets/goblin.png";
import HealthBar from "./HealthBar";

export default function EnemyCard({ enemy }) {

  if (!enemy) return null;

  return (
    <div style={{
      border: "2px solid red",
      padding: 20,
      width: 300
    }}>

      <h2>{enemy.name}</h2>

      <img
        src={goblin}
        alt="enemy"
        style={{width:120}}
      />

      <p>Health</p>
      <HealthBar value={enemy.health} max={100} />

      <p>Strength: {enemy.strength}</p>

    </div>
  );

}