// src/pages/Players.jsx
import React, { useState } from "react";
import CreatePlayerModal from "../Components/CreatePlayerModal";
import PlayersTable from "../Components/PlayersTable";

const Players = () => {
  const [search, setSearch] = useState("");
  const [resetTrigger, setResetTrigger] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestión de Jugadores</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Crear Jugador
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-lg font-semibold">
          <span className="text-gray-600">Balance Actual:</span>{" "}
          <span className="text-green-600">325.193,69</span>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Buscar por ID, CUIL, Nombre o Cajero"
            className="border px-4 py-2 rounded w-full md:w-80"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              setSearch("");
              setResetTrigger((prev) => prev + 1);
            }}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded"
          >
            🔄
          </button>
        </div>
      </div>

      <PlayersTable search={search} resetTrigger={resetTrigger} />
      <CreatePlayerModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Players;
