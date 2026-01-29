import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <link to="/">Inicio</link>
            <link to="/category/remeras">Remeras</link>
            <link to="/category/buzos">Buzos</link>
        </nav>
    );
};

export default NavBar;