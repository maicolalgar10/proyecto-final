import { NavLink } from "react-router-dom"

const Navsol = () => {
    return (
        <>
            <nav className="nav nav-scroller border-bottom border-body shadow-sm" aria-label="Navegación secundaria">
                <div className="container">
                    <NavLink className="btn btn-outline-primary" to="/zero">Emiciones netas cero</NavLink>
                    <NavLink className="btn btn-outline-primary" to="/energias">Energías renovables</NavLink>
                    <NavLink className="btn btn-outline-primary" to="/iniciativas">Iniciativas para la acción climática</NavLink>
                    <NavLink className="btn btn-outline-primary" to="/ods">ODS</NavLink>

                </div>
            </nav>
        </>
    )
}
export default Navsol;