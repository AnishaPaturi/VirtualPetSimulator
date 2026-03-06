import { useEffect } from "react";

export default function MapGrid({ grid, petPosition, movePet }) {

  const handleKey = (e) => {

    if (e.key === "ArrowUp") movePet(0, -1);
    if (e.key === "ArrowDown") movePet(0, 1);
    if (e.key === "ArrowLeft") movePet(-1, 0);
    if (e.key === "ArrowRight") movePet(1, 0);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${grid[0].length}, 60px)`,
        gap: "4px",
        marginTop: "30px"
      }}
    >

      {grid.map((row, y) =>
        row.map((cell, x) => {

          const isPet = petPosition.x === x && petPosition.y === y;

          return (
            <div
              key={`${x}-${y}`}
              style={{
                width: 60,
                height: 60,
                background: "#8fd694",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                border: "2px solid #4f8f4f"
              }}
            >

              {isPet ? "🐶" : cell}

            </div>
          );

        })
      )}

    </div>
  );
}