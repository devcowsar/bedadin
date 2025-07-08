import {
  Gamepad2,
  MonitorPlay,
  ToggleLeft,
  ToggleRight,
  Users,
  Volleyball,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loadingToggle, setLoadingToggle] = useState(null);

  // Simulated API fetch
  useEffect(() => {
    setTimeout(() => {
      setData({
        balanceActual: 325193.69,
        saldoJugadores: 1507916.03,
        status: {
          transferencias: true,
          telepagos: true,
          autogestion: true,
          bloqueo: false,
          casino1: true,
          casino2: true,
          casinoGeneral: true,
          deportes1: true,
          deportesGeneral: true,
          casinoVivo1: true,
          casinoVivoGeneral: true,
        },
      });
    }, 1000);
  }, []);

  const formatCurrency = (num) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(num);

  const handleToggle = async (key) => {
    if (!data) return;
    const current = data.status[key];
    setLoadingToggle(key);

    try {
      // Simulated API PATCH request
      await new Promise((res) => setTimeout(res, 800));
      setData((prev) => ({
        ...prev,
        status: {
          ...prev.status,
          [key]: !current,
        },
      }));
    } catch (err) {
      console.error("Error toggling:", err);
      alert("Error actualizando el estado");
    } finally {
      setLoadingToggle(null);
    }
  };

  const statusToggle = (label, key) => {
    const isActive = data?.status[key];
    const isLoading = loadingToggle === key;

    return (
      <li className="flex justify-between items-center py-1 border-b last:border-none">
        <span>{label}</span>
        {isLoading ? (
          <div className="w-6 h-6 animate-pulse bg-gray-300 rounded-full" />
        ) : (
          <button onClick={() => handleToggle(key)}>
            {isActive ? (
              <ToggleRight className="text-green-500 w-6 h-6" />
            ) : (
              <ToggleLeft className="text-red-500 w-6 h-6" />
            )}
          </button>
        )}
      </li>
    );
  };

  if (!data) {
    return (
      <div className="p-6 space-y-6">
        <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-24 bg-gray-200 rounded-xl animate-pulse" />
          <div className="h-24 bg-gray-200 rounded-xl animate-pulse" />
        </div>
        <div className="h-40 bg-gray-200 rounded-xl animate-pulse" />
        <div className="h-40 bg-gray-200 rounded-xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <span>Panel de Control</span>
      </h1>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Balance Actual:</h2>
          <p className="text-2xl font-semibold text-green-600">
            {formatCurrency(data.balanceActual)}
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Saldo Total de Jugadores:</h2>
          <p className="text-2xl font-semibold text-blue-600">
            {formatCurrency(data.saldoJugadores)}
          </p>
        </div>
      </div>

      {/* Section: Jugadores */}
      <div className="bg-white p-5 rounded-xl shadow space-y-2">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Users className="w-5 h-5 text-gray-600" />
          Jugadores
        </h2>
        <ul className="divide-y">
          {statusToggle("Transferencias entre jugadores", "transferencias")}
          {statusToggle("Depósitos Telepagos", "telepagos")}
          {statusToggle("Autogestión de depósitos", "autogestion")}
          {statusToggle("Bloqueo de jugadores", "bloqueo")}
        </ul>
      </div>

      {/* Section: Casino */}
      <div className="bg-white p-5 rounded-xl shadow space-y-2">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-gray-600" />
          Juegos - Casino
        </h2>
        <ul className="divide-y">
          {statusToggle("Casino 1", "casino1")}
          {statusToggle("Casino 2", "casino2")}
          {statusToggle("Casino - Estado general", "casinoGeneral")}
        </ul>
      </div>

      {/* Section: Deportes */}
      <div className="bg-white p-5 rounded-xl shadow space-y-2">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Volleyball className="w-5 h-5 text-gray-600" />
          Servicio de Deportes
        </h2>
        <ul className="divide-y">
          {statusToggle("Deportes 1", "deportes1")}
          {statusToggle("Deportes - Estado general", "deportesGeneral")}
        </ul>
      </div>

      {/* Section: Casino en Vivo */}
      <div className="bg-white p-5 rounded-xl shadow space-y-2">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <MonitorPlay className="w-5 h-5 text-gray-600" />
          Servicio de Casino en Vivo
        </h2>
        <ul className="divide-y">
          {statusToggle("Casino en Vivo 1", "casinoVivo1")}
          {statusToggle("Casino en Vivo - Estado general", "casinoVivoGeneral")}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
