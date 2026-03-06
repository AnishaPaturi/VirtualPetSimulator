export default function GameMenu({ explore, battle }) {

  return (
    <div style={{marginBottom:20}}>

      <button onClick={explore}>Explore 🌍</button>

      <button onClick={battle} style={{marginLeft:10}}>
        Battle ⚔️
      </button>

    </div>
  );

}