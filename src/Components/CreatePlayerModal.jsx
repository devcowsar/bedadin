import React, { useState } from "react";

const CreatePlayerModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    nombre: "",
    contraseña: "",
    cuil: "",
    telefono: "",
    antepasado: "",
    cajero: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // CUIL validation
    const cuilRegex = /^[0-9]{11}$/;
    if (!cuilRegex.test(form.cuil)) {
      alert("CUIL debe tener exactamente 11 números");
      return;
    }

    try {
      const response = await fetch("https://your-api.com/admin/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // optional
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.message}`);
        return;
      }

      alert("Jugador creado con éxito ✅");
      onClose(); // close modal
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error en el servidor.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Crear Jugador</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Contraseña:</label>
            <input
              type="password"
              name="contraseña"
              value={form.contraseña}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">CUIL:</label>
            <input
              type="text"
              name="cuil"
              value={form.cuil}
              onChange={handleChange}
              pattern="[0-9]{11}"
              title="CUIL debe tener exactamente 11 números"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Teléfono:</label>
            <input
              type="text"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Antepasado:</label>
            <input
              type="text"
              name="antepasado"
              value={form.antepasado}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Seleccione un cajero:</label>
            <select
              name="cajero"
              value={form.cajero}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="">-- Seleccione --</option>
              <option value="cajero1">Cajero 1</option>
              <option value="cajero2">Cajero 2</option>
              <option value="cajero3">Cajero 3</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlayerModal;
