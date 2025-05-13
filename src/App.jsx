import { useContext } from 'react'
import { UsuariosContex } from './context/UsuariosContex'
import { BarraBusqueda } from './componentes/BarraBusqueda'


function App() {
  const {datosApiUsuariosFiltrado , filtrarDatosUsuarios} = useContext(UsuariosContex)
  return (
    <>
      <BarraBusqueda usuarios={datosApiUsuariosFiltrado} filtrarUsuarios={filtrarDatosUsuarios}></BarraBusqueda>
      
    </>
  )
}

export default App
