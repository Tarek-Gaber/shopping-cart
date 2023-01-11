// node imports
import React, { useState } from "react";

// all products
export const products = [
    {
        name: 'Smart Watch',
        id: '1',
        categoryName: 'Category 1',
        price: 300,
        currency: '$',
        quantity: 0
    },
    {
        name: 'Iphone',
        id: '2',
        categoryName: 'Category 2',
        price: 1200.9,
        currency: '$',
        quantity: 0
    },
    {
        name: 'Samsung Galaxy Note 20 ultra 8GB ',
        id: '31',
        categoryName: 'Category 1',
        price: 560.9,
        currency: '$',
        quantity: 0
    },
    {
        name: 'Samsung Galaxy S22 ultra 12GB Ram',
        id: '4',
        categoryName: 'Category 4',
        price: 890.9,
        currency: '$',
        quantity: 0
    },
    {
        name: 'A23 dual SIM',
        id: '5',
        categoryName: 'Category 3',
        price: 350.9,
        currency: '$',
        quantity: 0
    },
    {
        name: 'Xiaomi Bods',
        id: '6',
        categoryName: 'Category 2',
        price: 300.9,
        currency: '$',
        quantity: 0
    },
    {
        name: 'Samsung Galaxy Tablet 3',
        id: '7',
        categoryName: 'Category 3',
        price: 950.9,
        currency: '$',
        quantity: 0
    },
    {
        name: 'Porer Bank',
        id: '8',
        categoryName: 'Category 1',
        price: 120.9,
        currency: '$',
        quantity: 0
    },
    {
        name: 'Wireless Cahrger',
        id: '9',
        categoryName: 'Category 4',
        price: 70.9,
        currency: '$',
        quantity: 0
    },
    {
        name: 'Anker Q30 Headephones',
        id: '10',
        categoryName: 'Category 2',
        price: 140.9,
        currency: '$',
        quantity: 0
    },
    {
        name: 'Samsung Galaxy S21 Ultra',
        id: '11',
        categoryName: 'Category 1',
        price: 480.9,
        currency: '$',
        quantity: 0
    },
    {
        name: 'Samsung Galaxy Note 20',
        id: '12',
        categoryName: 'Category 4',
        price: 420.9,
        currency: '$',
        quantity: 0
    },
]

export const categories = [
    {
        categoryId: 1,
        categoryName: 'Category 1',
    },
    {
        categoryId: 2,
        categoryName: 'Category 2',
    },
    {
        categoryId: 3,
        categoryName: 'Category 3',
    },
    {
        categoryId: 4,
        categoryName: 'Category 4',
    },
]

const productsContext = React.createContext({
    cartProducts: {},
    setCartProducts: () => {},
    selectedCategory: String,
    setSelectedCategory: () => {},
    totalPrice: Number,
});



export const ProductsProvider = (props) => {
    const [cartProducts, setCartProducts] = useState({});
    const [selectedCategory, setSelectedCategory] = useState({text: 'All Categories', id: 'all'});

    const totalPrice = Object.values(cartProducts).length && Object.values(cartProducts).reduce((total, {quantity, price}) => total + (quantity * price) , 0)

    return (
        <productsContext.Provider value={{
            cartProducts,
            setCartProducts,
            selectedCategory,
            setSelectedCategory,
            totalPrice: parseFloat(totalPrice.toFixed(2)),
        }}>
            {props.children}
        </productsContext.Provider>
    )
};

export default productsContext;