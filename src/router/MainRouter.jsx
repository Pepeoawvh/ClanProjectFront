import {Routes, Route} from 'react-router-dom'
import { Inicio } from '../pages/Inicio'
import { QueSonLosClanes } from '../pages/QueSonLosClanes'
import { PreguntasFrecuentes } from '../pages/PreguntasFrecuentes'
import { Equipo } from '../pages/Equipo'
import { RegistroInicio } from '../pages/RegistroInicio'
/* aqui irian paginas y rutas dinamicas y estaticas */

export const MainRouter = () => {

    return(
        <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/QueSonLosClanes" element={<QueSonLosClanes/>}/>
            <Route exact path="/PreguntasFrecuentes" element={<PreguntasFrecuentes/>}/>
            <Route exact path="/Equipo" element={<Equipo/>}/>
            <Route exact path="/RegistroInicio" element={<RegistroInicio/>}/>
            <Route path="*" element= {<error404/>}/>
            {/* crear una ruta dinamica para usuarios por id o por correo */}
        </Routes>
    )
}