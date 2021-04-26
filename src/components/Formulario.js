import React,{ Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear State de Citas
    const[cita,actualizarCita]=useState({
        mascota:" ",
        propietario:" ",
        fecha:" ",
        hora:" ",
        sintomas : " ",
    });

    const[ error, actualizarError] = useState(false);

//Funcion que se ejecuta cuando el usuario escribe en un input
const actualizarState = e =>{
    actualizarCita({
        ...cita,
        [e.target.name] : e.target.value
    })
}

//Extraer Valores
const{mascota,propietario,fecha,hora,sintomas}=cita;

//Cuando el usuario envia el formulario

const submitCita = (e) =>{
    e.preventDefault();
    console.log('iniciando validacion...');


    //Validar Formulari
    if(mascota.trim()=== '' || propietario.trim() === ''  || fecha.trim() === '' || hora.trim()==='' ){
        actualizarError(true);
        return;
    }
        actualizarError(false);
       
        cita.id = uuid();
   
     //crear la cita
     crearCita(cita);

    //reiniciar form

    actualizarCita({
        mascota:" ",
        propietario:" ",
        fecha:" ",
        hora:" ",
        sintomas: " ",
    })
}


return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error"> Todos los campos son obligatorios</p> : null}
            <form
            onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value={mascota}
                />

                <label>Nombre del Dueño</label>
                <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
                onChange={actualizarState}
                value={propietario}


                />

                <label>Fecha</label>
                <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
                />

                <label>Hora</label>
                <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
                />

                <label>Sintomas</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                value={sintomas}
                onChange={actualizarState}
                ></textarea>

            <button 
            type="submit"
            className="u-full-width button-primary"
            onChange={actualizarState}
            >Agregar Cita </button>
                
            
            
            </form>
        </Fragment>
     );
}
 
Formulario.propTypes ={
        crearCita:PropTypes.func.isRequired

}
export default Formulario;