import {Routes, Route} from 'react-router-dom'
import { Inicio } from '../pages/Inicio'
import { QueSonLosClanes } from '../pages/QueSonLosClanes'
import { QuienesSomos } from '../pages/QuienesSomos'
import { PreguntasFrecuentes } from '../pages/PreguntasFrecuentes'
import { RegistroInicio } from '../pages/RegistroInicio'
import { CrearClan } from '../pages/CrearClan'
import { UnirseClan } from '../pages/UnirseClan'
import { Profile } from '../pages/Profile'
/* aqui irian paginas y rutas dinamicas y estaticas */

export const MainRouter = () => {

    return(
        <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/QueSonLosClanes" element={<QueSonLosClanes/>}/>
            <Route exact path="/PreguntasFrecuentes" element={<PreguntasFrecuentes/>}/>
            <Route exact path="/QuienesSomos" element={<QuienesSomos/>}/>
            <Route exact path="/RegistroInicio" element={<RegistroInicio/>}/>
            <Route exact path="/CrearClan" element={<CrearClan/>}/>
            <Route exact path="/UnirseClan" element={<UnirseClan/>}/>
            <Route exact path="/Profile" element={<Profile/>}/>
            <Route path="*" element= {<error404/>}/>
            {/* crear una ruta dinamica para usuarios por id o por correo */}
        </Routes>
    )
}