import { Link } from "react-router-dom";

const Item = ({ id, title, price}) => {
    return(
        <div>
            <h3>{title}</h3>
            <p>${price}</p>
            <Link to={`/item/${id}`}>Ver detalles</Link>
        </div>
    );
};

export default Item;