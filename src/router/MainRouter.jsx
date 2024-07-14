import { Routes, Route } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { QueSonLosClanes } from "../pages/QueSonLosClanes";
import { QuienesSomos } from "../pages/QuienesSomos";
import { PreguntasFrecuentes } from "../pages/PreguntasFrecuentes";
import { RegistroInicio } from "../pages/RegistroInicio";
import { CrearClan } from "../pages/CrearClan";
import { UnirseClan } from "../pages/UnirseClan";
import { Profile } from "../pages/Profile";
import { NotFound } from "../pages/NotFound404";
import { PagoExitoso } from "../pages/PagoExitoso";
import { PagoFallido } from "../pages/PagoFallido";
import { PagoPendiente } from "../pages/PagoPendiente";
import { TerminosYCondiciones } from "../pages/TerminosYCondiciones";
import { BasesLegales } from "../pages/BasesLegales";
import { PoliticasDePrivacidad } from "../pages/PoliticasDePrivacidad";


export const MainRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Inicio />} />
      <Route exact path="/QueSonLosClanes" element={<QueSonLosClanes />} />
      <Route exact path="/PagoExitoso" element={<PagoExitoso />} />
      <Route exact path="/PagoFallido" element={<PagoFallido />} />
      <Route exact path="/PagoPendiente" element={<PagoPendiente />} />
      <Route exact path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />}/>
      <Route exact path="/QuienesSomos" element={<QuienesSomos />} />
      <Route exact path="/RegistroInicio" element={<RegistroInicio />} />
      <Route exact path="/CrearClan" element={<CrearClan />} />
      <Route exact path="/UnirseClan" element={<UnirseClan />} />
      <Route exact path="/Profile" element={<Profile />} />
      <Route exact path="/*" element={<NotFound />} />
      <Route exact path="/TerminosYCondiciones" element={<TerminosYCondiciones />} />
      <Route exact path="/PoliticasDePrivacidad" element={<PoliticasDePrivacidad />} />
      <Route exact path="/BasesLegales" element={<BasesLegales />} />
    </Routes>
  );
};
