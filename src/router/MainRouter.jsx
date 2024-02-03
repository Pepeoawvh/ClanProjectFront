import {Routes, Route} from 'react-router-dom'
import {Inicio} from '../pages/start/Inicio'

/* aqui irian paginas y rutas dinamicas y estaticas */

export const MainRouter = () => {

    return(
        <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route path="*" element= {<error404/>}/>
            {/* crear una ruta dinamica para usuarios por id o por correo */}
        </Routes>
    )
}