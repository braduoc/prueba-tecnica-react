import React, { useEffect, useRef, useState } from 'react'
import { UsuarioTable } from './UsuarioTable'

export const BarraBusqueda = ({ usuarios, filtrarUsuarios }) => {
    const [valorInputBusqueda, setValorInputBusqueda] = useState('')
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    const onChangeInputBusqueda = ({ target }) => {
        const valor = target.value
        setValorInputBusqueda(valor)
        filtrarUsuarios(valor)
    }
    return (
        <>
            <div className='container col-md-8'>
                <h1 className="text-center">Filtro De Usuarios</h1>
                <div className="input-group flex-nowrap">
                    <span className="btn btn-success" id="addon-wrapping">buscar</span>
                    <input type="text" ref={inputRef} value={valorInputBusqueda} onChange={onChangeInputBusqueda} className="form-control" placeholder="ingrese nombre usuario" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <br />
            </div>
            <UsuarioTable usuarios={usuarios}></UsuarioTable>
        </>
    )
}
