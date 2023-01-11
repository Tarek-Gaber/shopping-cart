// node imports
import { useContext } from "react";

import classes from "./Header.module.scss";

// como=ponents imports
import { Container } from "react-bootstrap";

// context imports
import productsContext from "../../context/ProductsContext";

const Header = () => {
    const { selectedCategory } = useContext(productsContext);

    return (
        <div className={classes.header}>
            <Container>
                <h1 className={classes['category-name']}>{selectedCategory.text}</h1>
            </Container>
        </div>
    )
};

export default Header;