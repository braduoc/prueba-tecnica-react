import React, { useState } from 'react';

export const UsuarioDetalles = ({ usuario }) => {
    const [oculto, setoculto] = useState(true)

    return (
        <>
            <div className='container' >
                <button className={oculto ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setoculto(!oculto)}>ver mas</button>
            </div>

            <div className="card" style={{
                display: oculto ? 'none' : 'block',
                position: 'fixed',
                top: '50%',          // Centra verticalmente
                left: '50%',         // Centra horizontalmente
                transform: 'translate(-50%, -50%)', // Ajusta para que se centre perfecto
                backgroundColor: 'black',
                color: 'white',
                padding: '20px',
                width: '400px',
                zIndex: 9999        // Asegura que quede encima de otros elementos
            }}>
                <div className="card-body">
                    <h5 className="card-title">Nombre: {usuario.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{usuario.username}</h6>
                    <p className="card-text">Direccion: {usuario.address.street} {usuario.address.suite}</p>
                    <p className="card-text">Telefono: {usuario.phone}</p>
                    <p className="card-text">Email: {usuario.email}</p>

                </div>
                <button style={{width:'100%'}} className='btn btn-success' onClick={() => setoculto(!oculto)}>ok</button>


            </div>
        </>


    );
};
