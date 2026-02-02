const products = [
{
    id: "1",
    title: "Remera React",
    price: 15000,
    category: "remeras",
    description: "Remera de React JS"
},
{
    id: "2",
    title: "Remera JS",
    price: 14000,
    category: "remeras",
    description: "Remera JavaScript"
},
{
    id: "3",
    title: "Buzo Node",
    price: 25000,
    category: "buzos",
    description: "Buzo Node.js"
}
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 800);
    }); 
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(p => p.id === id));
        }, 800);
    });
};
