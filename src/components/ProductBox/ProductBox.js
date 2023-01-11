// node imports
import { useContext } from "react";

import Classes from "./ProductBox.module.scss";

// components imports
import { Button, Card } from "react-bootstrap";

// context imports
import productsContext from "../../context/ProductsContext";

const ProductBox = ({product}) => {
    const {cartProducts, setCartProducts} = useContext(productsContext)

    const addProductHandler = () => {
        if(cartProducts[product.id] === undefined) {
            setCartProducts(prevState => ({...prevState, [product.id]: {...product, quantity: 1}}))
        } else {
            setCartProducts(prevState => ({...prevState, [product.id]: {...prevState[product.id], quantity: prevState[product.id].quantity + 1}}))
        }
    }

    return (
        <Card className={`${Classes['product-box']} mb-4`}>
            <Card.Body>
                <Card.Title className={`text-center mb-3`}>{product.categoryName}</Card.Title>
                <Card.Img variant="top" src="https://via.placeholder.com/150x100" className="mb-3" />
                <Card.Title title={product.name}>{product.name}</Card.Title>
                <p className={Classes.price}>{product.price}$</p>
            </Card.Body>
            <Button variant="primary" onClick={() => addProductHandler(product)}>Add To Cart</Button>
        </Card>
    );
};

export default ProductBox;