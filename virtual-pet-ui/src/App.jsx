import { useState } from "react";
import PetCard from "./components/PetCard";
import GameMenu from "./components/GameMenu";
import BattleLog from "./components/BattleLog";
import Inventory from "./components/Inventory";
import BattleScreen from "./components/BattleScreen";

export default function App() {

  const [pet, setPet] = useState({
    name: "Bolt",
    level: 1,
    health: 100,
    energy: 80,
    strength: 12,
    xp: 0
  });

  const [enemy, setEnemy] = useState(null);

  const [log, setLog] = useState(["Game started"]);

  const [levelUp, setLevelUp] = useState(false);

  // ----------------------------
  // EXPLORE EVENT
  // ----------------------------

  const explore = () => {

    const events = [
      { type: "item", text: "Found an apple 🍎" },
      { type: "enemy", text: "A goblin appeared!" },
      { type: "treasure", text: "Discovered treasure 💰" }
    ];

    const event = events[Math.floor(Math.random() * events.length)];

    setLog(prev => [...prev, event.text]);

    if (event.type === "enemy") {
      spawnEnemy();
    }
  };

  // ----------------------------
  // SPAWN ENEMY
  // ----------------------------

  const spawnEnemy = () => {

    const enemies = [
      { name: "Goblin", health: 60, strength: 8 },
      { name: "Snake", health: 50, strength: 10 },
      { name: "Wolf", health: 70, strength: 9 }
    ];

    const e = enemies[Math.floor(Math.random() * enemies.length)];

    setEnemy(e);
  };

  // ----------------------------
  // BATTLE SYSTEM
  // ----------------------------

  const attackEnemy = () => {

    if (!enemy) return;

    const petDamage = pet.strength;
    const enemyDamage = Math.floor(Math.random() * enemy.strength);

    const newEnemyHealth = enemy.health - petDamage;

    setEnemy(prev => ({
      ...prev,
      health: newEnemyHealth
    }));

    setPet(prev => ({
      ...prev,
      health: prev.health - enemyDamage,
      xp: prev.xp + 10
    }));

    setLog(prev => [
      ...prev,
      `${pet.name} dealt ${petDamage} damage`,
      `${enemy.name} dealt ${enemyDamage} damage`
    ]);

    if (newEnemyHealth <= 0) {

      setLog(prev => [...prev, `${enemy.name} defeated!`]);

      setEnemy(null);

      setPet(prev => {

        const newXP = prev.xp + 20;

        if (newXP >= 50) {
          setLevelUp(true);

          return {
            ...prev,
            level: prev.level + 1,
            xp: 0,
            strength: prev.strength + 3
          };
        }

        return {
          ...prev,
          xp: newXP
        };
      });

      setTimeout(() => setLevelUp(false), 2000);
    }
  };

  // ----------------------------
  // BASIC BATTLE BUTTON
  // ----------------------------

  const battle = () => {
    spawnEnemy();
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>

      <h1>🐾 Virtual Pet Adventure</h1>

      <PetCard pet={pet} />

      <GameMenu explore={explore} battle={battle} />

      {enemy && (
        <BattleScreen
          pet={pet}
          enemy={enemy}
          attack={attackEnemy}
        />
      )}

      <Inventory />

      <BattleLog log={log} />

      {levelUp && (
        <div
          style={{
            position: "fixed",
            top: "40%",
            left: "40%",
            fontSize: "40px",
            color: "gold",
            fontWeight: "bold"
          }}
        >
          ⭐ LEVEL UP!
        </div>
      )}

    </div>
  );
}