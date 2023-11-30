import Energias from "./Pages/Energias";
import Inicio from "./Pages/Inicio";
import Soluciones from "./Pages/Soluciones";
import Zero from "./Pages/Zero";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom"
import Ods from "./Pages/Ods";
import Iniciativas from "./Pages/Iniciativas";
import Eventos from "./Pages/Eventos";
import Recursos from "./Pages/Recursos";

const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route element={<Inicio />} path="/"></Route>
        <Route element={<Soluciones />} path="/soluciones"></Route>
        <Route element={<Zero />} path="/zero"></Route>
        <Route element={<Energias />} path="/energias"></Route>
        <Route element={<Ods />} path="/ods"></Route>
        <Route element={<Iniciativas />} path="/iniciativas"></Route>
        <Route element={<Eventos />} path="/eventos"></Route>
        <Route element={<Recursos />} path="/recursos"></Route>
      </Routes>
    </>

  )
}
export default App;