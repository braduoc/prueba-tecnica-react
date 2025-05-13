import React from 'react'
import { UsuarioDetalles } from './UsuarioDetalles'

export const UsuarioTable = ({ usuarios  }) => {
    return (
        <div className='container'>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Nombre Usario</th>
                        <th>Email Usario</th>
                        <th>Ver Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.length > 0? usuarios.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td><UsuarioDetalles usuario={item}></UsuarioDetalles></td>
            
                            </tr>
                        )
                    }):<tr>
                    <td>No hay ningun usuario enconcontrado</td>
                    <td></td>
                    <td></td>
                </tr>}
                </tbody>
            </table>
            
            
        </div>
    )
}
