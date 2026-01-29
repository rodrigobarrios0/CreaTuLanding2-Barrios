const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const{ categoryId} = useParams();

    useEffect(() => {
        getProducts().then(data=>{
            if(categoryId){
                setItems(data.filter(p => p.category === categoryId));
            }else{
                setItems(data);
            }
        });
    }, [categoryId]);

    return <ItemList items={items} />;
};

export default ItemDetailContainer;