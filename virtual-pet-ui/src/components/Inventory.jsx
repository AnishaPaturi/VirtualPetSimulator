export default function Inventory({ inventory, useItem }) {

  const slots = 9; // total inventory slots

  const grid = [...inventory];

  while (grid.length < slots) {
    grid.push(null);
  }

  return (
    <div
      style={{
        marginTop: 20,
        border: "3px solid black",
        padding: 15,
        width: 220
      }}
    >

      <h3>🎒 Inventory</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: "8px"
        }}
      >

        {grid.map((item, i) => (

          <div
            key={i}
            onClick={() => item && useItem(item)}
            style={{
              width: 60,
              height: 60,
              border: "2px solid gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "28px",
              background: item ? "#fff" : "#ddd",
              cursor: item ? "pointer" : "default"
            }}
          >

            {item ? item.split(" ")[1] : ""}

          </div>

        ))}

      </div>

    </div>
  );
}