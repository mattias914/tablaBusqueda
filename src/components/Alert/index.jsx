import Formulario from "../Formulario";
import './Alert.css'

const Alert = ({error}) => {
    return(
        <>
            {error === 'constraseñas' && <p className='mensajeError'>Las contraseñas no coinciden !!</p>}
            {error === 'campos' && <p className='mensajeError'>complete todos los campos !!</p>}
            {error === 'email' && <p className='mensajeError'>no es un formato valido de email !!</p>}
            {error === 'correcto' && <p className='mensajeCorrecto'>Colaborador agregado!</p>}
        </>
    )
};

export default Alert;