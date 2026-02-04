const API_URl = "https://fakestoreapi.com/products";

export const getProducts = async () => {
    const response = await fetch(API_URl);
    return response.json();
};

export const getProductByCategory =async (category) => {
    const response = await fetch(`${API_URL}/category/${category}`);
    return response.json();
};

export const getProductById =async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};