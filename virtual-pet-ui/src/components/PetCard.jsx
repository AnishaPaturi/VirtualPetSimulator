import HealthBar from "./HealthBar";
import dog from "../assets/dog.png";

export default function PetCard({ pet }) {

  return (
    <div style={{
      border: "2px solid black",
      padding: 20,
      width: 300
    }}>

      <h2>{pet.name}</h2>

      <img
        src={dog}
        alt="pet"
        style={{width:120}}
      />

      <p>Level: {pet.level}</p>

      <p>Health</p>
      <HealthBar value={pet.health} max={100} />

      <p>Energy</p>
      <HealthBar value={pet.energy} max={100} />

      <p>XP: {pet.xp}</p>

    </div>
  );

}