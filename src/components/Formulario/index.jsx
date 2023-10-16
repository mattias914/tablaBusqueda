  import { useState } from "react";
  import Alert from "../Alert";
  import Listado from "../Listado";
  import './Formulario.css'

  const Formulario = ({ agregarColaborador }) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState(null);
    const [enviado, setEnviado] = useState(false);

    const validarDatos = (e) => {
      e.preventDefault();
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (
        nombre === "" ||
        email === "" ||
        edad === '' ||
        cargo === "" ||
        telefono === ""
      ) {
        setError("campos");
        setTimeout(() => {
          setError(null);
        }, 3000);
        return;
      }

      if (!emailRegex.test(email)) {
        setError("email");
        setTimeout(() => {
          setError(null);
        }, 3000);
        return;
      }

      agregarColaborador({
        nombre,
        correo: email,
        edad,
        cargo,
        telefono,
      });

      if (error === null){
        setError("correcto");
        setTimeout(() => {
          setError(null);
        }, 3000);
        return;
      }

      setEnviado(true);
      setNombre("");
      setEmail("");
      setCargo("");
      setTelefono("");
      setEdad('');
      setError(null);
    };

    return (
      <>
        <form className="formulario" onSubmit={validarDatos}>
          <h2>Crear Colaborador</h2>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Ingrese su edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Ingrese el cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Ingrese el telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Crear
          </button>

          <Alert error={error} />
          
        </form>
      </>
    );
  };
  export default Formulario;
