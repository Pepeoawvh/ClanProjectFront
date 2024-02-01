import {Routes,Route, Form} from 'react-router-dom'
/* aqui irian paginas y rutas dinamicas y estaticas */

export const MainRouter = () => {
    return(
        <Routes>
            <Route path="/" element= {<>Inicio</>}/>
            <Route path="*" element= {<>error 404</>}/>
            {/* crear una ruta dinamica para usuarios por id o por correo */}
        </Routes>
    )
}