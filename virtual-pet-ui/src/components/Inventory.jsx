export default function Inventory(){

  const items = ["Apple 🍎", "Potion 🧪", "Gold Coin 💰"];

  return (
    <div style={{marginTop:20}}>

      <h3>Inventory</h3>

      <ul>
        {items.map((item,i)=>(
          <li key={i}>{item}</li>
        ))}
      </ul>

    </div>
  );
}