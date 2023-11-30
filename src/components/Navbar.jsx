import { NavLink } from "react-router-dom"
import Camcli from "../assets/images/camcli.jpg"

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body"
                data-bs-theme="dark">
                <div className="container">

                    <NavLink className="btn btn-outline" to="/">
                        <img src={Camcli} height={60} width={60} />
                    </NavLink>
                    <NavLink className="btn btn-outline-primary" to="/soluciones">Soluciones</NavLink>
                    <NavLink className="btn btn-outline-primary" to="/eventos">Eventos</NavLink>
                    <NavLink className="btn btn-outline-primary" to="/recursos">Recursos</NavLink>
                </div>
            </nav>
        </>
    )
}
export default Navbar;