import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "../components/ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState (null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId).then(res => setItem(res));
    }, [itemId]);
    
    return item ? <ItemDetail {...item} /> :<p>Cargando...</p>;
};

export default ItemDetailContainer;