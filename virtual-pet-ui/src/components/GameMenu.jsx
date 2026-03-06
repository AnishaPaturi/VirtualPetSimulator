export default function GameMenu({ explore, battle, save }) {

  return (
    <div className="mb-6 space-x-4">

      <button
        onClick={explore}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Explore
      </button>

      <button
        onClick={battle}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Battle
      </button>

      <button
        onClick={save}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Game
      </button>

    </div>
  );
}