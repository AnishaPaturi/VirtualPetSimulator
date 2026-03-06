import EnemyCard from "./EnemyCard";

export default function BattleScreen({ pet, enemy, attack }) {

  if (!enemy) return null;

  return (
    <div style={{
      marginTop: 30,
      padding: 20,
      border: "3px solid black"
    }}>

      <h2>⚔️ Battle Mode</h2>

      <div style={{
        display: "flex",
        gap: 40
      }}>

        <div>
          <h3>{pet.name}</h3>
          <p>Health: {pet.health}</p>
        </div>

        <EnemyCard enemy={enemy} />

      </div>

      <button
        onClick={attack}
        style={{
          marginTop:20,
          padding:"10px 20px"
        }}
      >
        Attack ⚔️
      </button>

    </div>
  );

}