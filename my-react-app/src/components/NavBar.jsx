import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/category/remeras">Remeras</Link>
            <Link to="/category/buzos">Buzos</Link>
        </nav>
    );
};

export default NavBar;