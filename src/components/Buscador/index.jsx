import React, { useState } from "react";

const SearchBar = ({ buscando }) => {
  const [busqueda, setBusqueda] = useState("");

  const manejarBusqueda = () => {
    buscando(busqueda);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
