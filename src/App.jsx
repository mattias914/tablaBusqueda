import './App.css'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import { BaseColaboradores } from "./components/BaseColaboradores";
import { useState } from 'react';

function App() {

  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
  const agregarColaborador = (nuevoColaborador) => {
    // Agregar el nuevo colaborador a la lista de colaboradores
    setListaColaboradores([...listaColaboradores, nuevoColaborador]);
  };
    

  return (
    <>
      <main>
        <Listado listaColaboradores={listaColaboradores}/>
        <Formulario agregarColaborador={agregarColaborador} />
      </main>
    </>
  )
}

export default App
