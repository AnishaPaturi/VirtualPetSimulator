import { useState, useEffect } from "react";
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

  const [inventory, setInventory] = useState([]);

  const [petPosition, setPetPosition] = useState({ x: 0, y: 0 });

  const [enemy, setEnemy] = useState(null);

  const [log, setLog] = useState(["Game started"]);

  const [levelUp, setLevelUp] = useState(false);

  // ----------------------------
  // LOAD GAME ON START
  // ----------------------------

  useEffect(() => {

    const saved = localStorage.getItem("petGameSave");

    if (saved) {

      const data = JSON.parse(saved);

      setPet(data.pet);
      setInventory(data.inventory);
      setPetPosition(data.petPosition);

      setLog(l => [...l, "Save file loaded"]);
    }

  }, []);

  // ----------------------------
  // SAVE GAME
  // ----------------------------

  const saveGame = () => {

    const data = {
      pet,
      inventory,
      petPosition
    };

    localStorage.setItem("petGameSave", JSON.stringify(data));

    setLog(l => [...l, "Game saved"]);
  };

  // ----------------------------
  // EXPLORE
  // ----------------------------

  const explore = () => {

    const events = [
      { type: "item", text: "Found an apple 🍎" },
      { type: "enemy", text: "A goblin appeared!" },
      { type: "treasure", text: "Discovered treasure 💰" }
    ];

    const event = events[Math.floor(Math.random() * events.length)];

    setLog(prev => [...prev, event.text]);

    if (event.type === "enemy") spawnEnemy();

    if (event.type === "item") {
      setInventory(i => [...i, "Apple"]);
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

          setTimeout(() => setLevelUp(false), 2000);

          return {
            ...prev,
            level: prev.level + 1,
            xp: 0,
            strength: prev.strength + 3
          };
        }

        return { ...prev, xp: newXP };

      });
    }
  };

  // ----------------------------
  // USE ITEM
  // ----------------------------

  const useItem = (item) => {

    if (item === "Apple") {

      setPet(prev => ({
        ...prev,
        health: Math.min(prev.health + 20, 100)
      }));

      setLog(l => [...l, "Apple healed 20 HP"]);
    }

  };

  return (
    <div className="bg-green-200 min-h-screen p-8 font-[Press_Start_2P]">

      <h1 className="text-2xl mb-6">🐾 Virtual Pet Adventure</h1>

      <PetCard pet={pet} />

      <GameMenu explore={explore} battle={spawnEnemy} save={saveGame} />

      {enemy && (
        <BattleScreen
          pet={pet}
          enemy={enemy}
          attack={attackEnemy}
        />
      )}

      <Inventory inventory={inventory} useItem={useItem} />

      <BattleLog log={log} />

      {levelUp && (
        <div className="fixed top-1/2 left-1/2 text-yellow-400 text-3xl">
          ⭐ LEVEL UP!
        </div>
      )}

    </div>
  );
}