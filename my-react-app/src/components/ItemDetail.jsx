import ItemCount from "./ItemCount";

const ItemDetail = ({ title, description, price, image }) => {
    return (
        <div className="bg-gray-400 h-50 w-50 grid">
            <h2 className="bg-gray-400 ">{title}</h2>
            <img src={image} alt={title} />
            <p className="bg-red-400">{description}</p>
            <p>${price}</p>
            <ItemCount  />
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Comprar
            </button>
        </div>
    );
};

export default ItemDetail;