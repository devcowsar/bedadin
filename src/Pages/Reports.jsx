import React, { useState } from "react";

const slotsOProviders = [
  "All",
  "PragmaticPlay",
  "BGaming",
  "RubyPlay",
  "Yggdrasil",
  "KAGaming",
  "Blueprint",
  "Platipus",
  "Tomhorn",
  "OneTouch",
  "NetGame",
  "BoomingGames",
  "Belatra Games",
  "Spinmatic",
  "Gamebeat",
  "AmigoGaming",
  "Kalamba",
  "Nucleus",
  "CTInteractive",
  "Apparat",
];

const slotsAProviders = [
  "All",
  "Pragmatic",
  "Greentube",
  "EGT",
  "Igrosoft",
  "NetEnt",
  "NYX",
  "PlayNGo",
  "RedTiger",
  "Sprite",
  "RelaxGaming",
  "PushGaming",
  "3Oaks",
  "Spinomenal",
  "PGSoft",
  "Playson",
  "Hacksaw",
];

const casinoEnVivoProviders = ["All", "Pragmatic", "ICONIC21", "Betgames"];

const Reports = () => {
  const [from, setFrom] = useState("2025-07-01");
  const [to, setTo] = useState("2025-07-11");

  const [selectedSlotsO, setSelectedSlotsO] = useState("All");
  const [selectedSlotsA, setSelectedSlotsA] = useState("All");
  const [selectedCasinoLive, setSelectedCasinoLive] = useState("All");

  const handleApply = () => {
    console.log("Fetching reports from", from, "to", to);
    console.log("Filters:", {
      selectedSlotsO,
      selectedSlotsA,
      selectedCasinoLive,
    });
  };

  const Section = ({ title, columns, rows, totalRow }) => (
    <div className="bg-white rounded-xl shadow p-4 space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-4 py-2 border">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="even:bg-gray-50">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-2 border">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
            {totalRow && (
              <tr className="bg-gray-200 font-semibold">
                {totalRow.map((cell, i) => (
                  <td key={i} className="px-4 py-2 border">
                    {cell}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">Reportes</h1>

      {/* Date + Provider Filters */}
      <div className="bg-white rounded-xl shadow p-4 space-y-4">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Fecha Desde:</label>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Fecha Hasta:</label>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border px-3 py-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">SLOTS O</label>
            <select
              value={selectedSlotsO}
              onChange={(e) => setSelectedSlotsO(e.target.value)}
              className="border px-3 py-2 rounded w-52"
            >
              {slotsOProviders.map((provider) => (
                <option key={provider} value={provider}>
                  {provider}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">SLOTS A</label>
            <select
              value={selectedSlotsA}
              onChange={(e) => setSelectedSlotsA(e.target.value)}
              className="border px-3 py-2 rounded w-52"
            >
              {slotsAProviders.map((provider) => (
                <option key={provider} value={provider}>
                  {provider}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">CASINO EN VIVO</label>
            <select
              value={selectedCasinoLive}
              onChange={(e) => setSelectedCasinoLive(e.target.value)}
              className="border px-3 py-2 rounded w-52"
            >
              {casinoEnVivoProviders.map((provider) => (
                <option key={provider} value={provider}>
                  {provider}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleApply}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 self-end"
          >
            Aplicar
          </button>
        </div>
      </div>

      {/* Sections */}
      <Section
        title="2W POWER"
        columns={[
          "Rubro",
          "Recuento de Transacciones",
          "Monto Apostado",
          "Monto Pagado",
          "Newtwin",
          "Detalles",
        ]}
        rows={[
          [
            "SLOTS O",
            "954,00",
            "1.702.464,40",
            "1.139.708,34",
            "562.756,06",
            "Detalles",
          ],
          [
            "SLOTS A",
            "62,00",
            "9.274,00",
            "10.728,50",
            "-1.454,50",
            "Detalles",
          ],
          [
            "CASINO EN VIVO",
            "16,00",
            "86.900,00",
            "3.000,00",
            "83.900,00",
            "Detalles",
          ],
        ]}
        totalRow={[
          "TOTALES",
          "1.032,00",
          "1.798.638,40",
          "1.153.436,84",
          "645.201,56",
          "",
        ]}
      />

      <Section
        title="BSW"
        columns={[
          "Rubro",
          "Recuento de Transacciones",
          "Monto Apostado",
          "Monto Pagado",
          "Newtwin",
          "Detalles",
        ]}
        rows={[
          ["Digitain", "36,00", "6.234,00", "4.337,88", "1.896,12", "Detalles"],
          [
            "Pragmatic",
            "43,00",
            "11.370,00",
            "15.199,00",
            "-3.829,00",
            "Detalles",
          ],
          ["Rubiplay", "4,00", "600,00", "0,00", "600,00", "Detalles"],
          ["TVBet", "25,00", "2.770,00", "2.809,50", "-39,50", "Detalles"],
        ]}
        totalRow={[
          "TOTALES",
          "108,00",
          "20.974,00",
          "22.346,38",
          "-1.372,38",
          "",
        ]}
      />

      <Section
        title="EVENBET"
        columns={[
          "Rubro",
          "Recuento de Transacciones",
          "Monto Apostado",
          "Monto Pagado",
          "Newtwin",
        ]}
        rows={[
          ["CASINO", "0,00", "0,00", "0,00", "0,00"],
          ["DEPORTES", "0,00", "0,00", "0,00", "0,00"],
        ]}
        totalRow={["TOTALES", "0,00", "0,00", "0,00", "0,00"]}
      />

      <Section
        title="EVENBET POKER"
        columns={[
          "Rubro",
          "Recuento de Transacciones",
          "Monto Apostado",
          "Monto Pagado",
          "TOTAL POKER",
          "RAKE MESA VIVA",
          "RAKE TORNEO",
          "RAKE TOTAL",
          "Monto a Pagar",
          "Detalles",
        ]}
        rows={[
          [
            "POKER",
            "0",
            "0,00",
            "0,00",
            "0,00",
            "0,00",
            "0,00",
            "0,00",
            "0,00",
            "Detalles",
          ],
        ]}
      />

      <Section
        title="BETSOFT"
        columns={[
          "Rubro",
          "Recuento de Transacciones",
          "Monto Apostado",
          "Monto Pagado",
          "Newtwin",
        ]}
        rows={[
          ["SLOTS", "0,00", "0,00", "0,00", "0,00"],
          ["CASINO EN VIVO", "0,00", "0,00", "0,00", "0,00"],
          ['DEPORTES "DIGITAIN"', "0,00", "0,00", "0,00", "0,00"],
        ]}
        totalRow={["TOTALES", "0,00", "0,00", "0,00", "0,00"]}
      />
    </div>
  );
};

export default Reports;
