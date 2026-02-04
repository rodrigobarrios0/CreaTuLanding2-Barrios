import { Link } from "react-router-dom";

const Item = ({ id, title, price, image }) => {
    return (
    <div className="bg-white rounded-xl shadow p-4">
    
    <img
        src={image}
        className="h-40 mx-auto object-contain mb-3"
    />

    <h3 className="text-sm font-semibold">
        {title}
    </h3>

    <p className="font-bold mt-2">$
    {price}
    </p>

    <Link to={`/item/${id}`} className="text-blue-600">
        Ver detalles
    </Link>

    </div>
    );
};

export default Item;