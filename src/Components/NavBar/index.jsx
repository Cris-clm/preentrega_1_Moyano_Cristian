//código de barra de Navg.

import Widget from "../widget";
import "./navbar.css";



function NavBar() {
    return <div className="navbar">
        <div><Widget /></div>
        <ul className="menu">
            <li> <button>Remeras</button></li>
            <li> <button>Pantalones</button></li>
            <li> <button>Zapatos</button></li>
            <li> <button>Remeras Estampadas</button></li>
            <li> <button>Accesorios</button></li>
        </ul>

    </div>;
}

export default NavBar;