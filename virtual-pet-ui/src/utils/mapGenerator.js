export function generateMap(size = 6) {

  const map = [];

  for (let y = 0; y < size; y++) {

    const row = [];

    for (let x = 0; x < size; x++) {

      const rand = Math.random();

      if (rand < 0.1) row.push("👹");
      else if (rand < 0.15) row.push("💰");
      else if (rand < 0.20) row.push("🍎");
      else row.push("");

    }

    map.push(row);
  }

  return map;
}