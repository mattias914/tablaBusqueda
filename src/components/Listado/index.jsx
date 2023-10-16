import { useState } from "react";
import Formulario from "../Formulario";
import "./Listado.css";

const Listado = ({ listaColaboradores }) => {
  const [busqueda , setBusqueda] = useState('');
  const manejarBusqueda = (terminoBusqueda) => {
    setBusqueda(terminoBusqueda);
  };
  const colaboradoresFiltrados = listaColaboradores.filter((colaborador) => {
    return colaborador.nombre && colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase());
  });

  return (
    <>
      <section>
        <h2>Lista de colaboradores </h2>
        <article>
          <input
          className="busqueda"
          type="text"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}/>
        </article>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Edad</th>
              <th scope="col">Cargo</th>
              <th scope="col">Telefono</th>
            </tr>
          </thead>
          <tbody>
            {colaboradoresFiltrados.map((colaboradoresFiltrados, index) => (
              <tr key={index}>
                <td>{colaboradoresFiltrados.nombre}</td>
                <td>{colaboradoresFiltrados.correo}</td>
                <td>{colaboradoresFiltrados.edad}</td>
                <td>{colaboradoresFiltrados.cargo}</td>
                <td>{colaboradoresFiltrados.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Listado;
