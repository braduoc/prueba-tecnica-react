import React, { useEffect, useState } from 'react'
import { UsuariosContex } from './UsuariosContex'

export const UsuariosProviber = ({children}) => {
    const [datosApiUsuarios, setDatosApiUsuarios] = useState([])
    const [datosApiUsuariosFiltrado, setDatosApiUsuariosFiltrado] = useState([])
    const usuarioFetch = async() =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const datosApiUsuarios = await response.json()
        setDatosApiUsuarios(datosApiUsuarios)
        setDatosApiUsuariosFiltrado(datosApiUsuarios)
    }
    useEffect(() => {
        usuarioFetch()
    }, [])

    const filtrarDatosUsuarios = (valorInput) =>{
        
        if(valorInput.trim() === '')
            setDatosApiUsuariosFiltrado(datosApiUsuarios)
        else{
            const datosFiltrados = datosApiUsuarios.filter(item => item.name.toLowerCase().includes(valorInput.toLowerCase()))
            setDatosApiUsuariosFiltrado(datosFiltrados)
        }
        return datosApiUsuariosFiltrado
    }
    
    
  return (
    <UsuariosContex.Provider value={{datosApiUsuariosFiltrado , filtrarDatosUsuarios}}>
        {children}
    </UsuariosContex.Provider>
  )
}
