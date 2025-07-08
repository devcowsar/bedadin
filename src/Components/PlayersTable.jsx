import React, { useMemo, useState } from "react";

const initialPlayers = [
  {
    id: 210,
    cuil: "27406465158",
    name: "Lara",
    balance: 0,
    createdAt: "2025-05-19",
    ancestor: "Playbet",
    phone: "0",
    lastLogin: "19/05/2025 22:23:52",
  },
  {
    id: 208,
    cuil: "20349062640",
    name: "sebarock3210",
    balance: 0,
    createdAt: "2025-05-19",
    ancestor: "Playbet",
    phone: "0",
    lastLogin: "19/05/2025 13:11:27",
  },
  {
    id: 233,
    cuil: "20330497034",
    name: "Joacoydanna",
    balance: 1000,
    createdAt: "2025-04-08",
    ancestor: "Playbet",
    phone: "0",
    lastLogin: "19/05/2025 00:58:45",
  },
  {
    id: 200,
    cuil: "20106429741",
    name: "andres93",
    balance: 0,
    createdAt: "2025-05-19",
    ancestor: "Playbet",
    phone: "0",
    lastLogin: "19/05/2025 08:41:55",
  },
  {
    id: 89,
    cuil: "27355249358",
    name: "Mariarosa15169",
    balance: 0,
    createdAt: "2025-05-14",
    ancestor: "Playbet",
    phone: "0",
    lastLogin: "19/05/2025 10:53:01",
  },
  {
    id: 189,
    cuil: "20436125764",
    name: "loba",
    balance: 0,
    createdAt: "2025-05-19",
    ancestor: "Playbet",
    phone: "0",
    lastLogin: "19/05/2025 05:25:31",
  },
  {
    id: 258,
    cuil: "20171899630",
    name: "daniel7188",
    balance: 0,
    createdAt: "2025-04-30",
    ancestor: "Playbet",
    phone: "0",
    lastLogin: "19/05/2025 03:40:25",
  },
  {
    id: 207,
    cuil: "27257007052",
    name: "LucreG",
    balance: 0,
    createdAt: "2025-05-11",
    ancestor: "Playbet",
    phone: "0",
    lastLogin: "19/05/2025 03:34:39",
  },
  {
    id: 153,
    cuil: "23399056659",
    name: "Nahuel1997",
    balance: 0,
    createdAt: "2025-04-29",
    ancestor: "Playbet",
    phone: "0",
    lastLogin: "18/05/2025 22:37:16",
  },
  {
    id: 43,
    cuil: "27409519909",
    name: "lili951",
    balance: 0,
    createdAt: "2025-04-03",
    ancestor: "Playbet",
    phone: "0",
    lastLogin: "18/05/2025 12:11:57",
  },
  // Add more if needed for testing
];

const ITEMS_PER_PAGE = 5;

const PlayersTable = ({ search, resetTrigger }) => {
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // Handle refresh
  React.useEffect(() => {
    setPlayers(initialPlayers);
    setCurrentPage(1);
  }, [resetTrigger]);

  // Filter
  const filtered = useMemo(() => {
    return players.filter((p) => {
      const q = search.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.cuil.includes(q) ||
        p.id.toString().includes(q) ||
        p.ancestor.toLowerCase().includes(q)
      );
    });
  }, [players, search]);

  // Sort
  const sorted = useMemo(() => {
    if (!sortBy) return filtered;
    return [...filtered].sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      if (typeof valA === "number") {
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }
      return sortOrder === "asc"
        ? String(valA).localeCompare(valB)
        : String(valB).localeCompare(valA);
    });
  }, [filtered, sortBy, sortOrder]);

  // Paginate
  const pageCount = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const currentItems = sorted.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <>
      <div className="overflow-auto bg-white rounded-lg shadow">
        <table className="w-full min-w-[1000px] text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 font-semibold">
            <tr>
              {[
                "id",
                "cuil",
                "name",
                "balance",
                "createdAt",
                "ancestor",
                "phone",
                "lastLogin",
              ].map((col) => (
                <th
                  key={col}
                  className="p-3 cursor-pointer"
                  onClick={() => handleSort(col)}
                >
                  {col === "id"
                    ? "ID"
                    : col === "cuil"
                    ? "CUIL"
                    : col === "name"
                    ? "Nombre"
                    : col === "balance"
                    ? "Saldo"
                    : col === "createdAt"
                    ? "Fecha de Creación"
                    : col === "ancestor"
                    ? "Antepasado"
                    : col === "phone"
                    ? "Número de Teléfono"
                    : "Último Inicio de Sesión"}
                  {sortBy === col && (sortOrder === "asc" ? " ▲" : " ▼")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.cuil}</td>
                <td className="p-3 font-medium">{p.name}</td>
                <td className="p-3">
                  {p.balance.toLocaleString("es-AR", {
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td className="p-3">{p.createdAt}</td>
                <td className="p-3">{p.ancestor}</td>
                <td className="p-3">{p.phone}</td>
                <td className="p-3">{p.lastLogin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          ◀ Anterior
        </button>
        <span>
          Página {currentPage} de {pageCount}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, pageCount))}
          disabled={currentPage === pageCount}
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          Siguiente ▶
        </button>
      </div>
    </>
  );
};

export default PlayersTable;
