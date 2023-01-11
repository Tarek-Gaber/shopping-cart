// node imports
import { useContext, useState } from "react";
import ReactDOM from "react-dom";

import Classes from './Home.module.scss'

// components imports
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../../layout/Header/Header"
import ProductsFilter from "../../components/ProductsFilter/ProductFilter";
import ProductBox from "../../components/ProductBox/ProductBox"
import ReceiptModal from "../../components/ReceiptModal/ReceiptModal";

// context imports
import productsContext from "../../context/ProductsContext";
import { products } from "../../context/ProductsContext";

const Home = (props) => {
    const [showReceiptModal, setShowReceiptModal] = useState(false)
    const { totalPrice, selectedCategory } = useContext(productsContext)

    const filteredProducts = selectedCategory.id === 'all' ? products : products.filter(function (el) {return el.categoryName === selectedCategory.text;})

    const closeReceiptModalHandler = () => {
        setShowReceiptModal(false)
    }
    const showReceiptModalHandler = () => {
        setShowReceiptModal(true)
    }

    return (
        <>
            <Header/>

            <div className={`${Classes.home} pt-5 pb-5`}>
                <Container>
                    <ProductsFilter />

                    <Row>
                        {
                            filteredProducts.map((product, i) => {
                                return <Col xs={12} sm={6} md={4} lg={3} key={product.id}><ProductBox product={product}/></Col>
                            })
                        }
                    </Row>

                    <div className={Classes['total-row']}>
                        <p className={Classes.total}>
                            <span className={Classes.name}>Total Price: </span>
                            <span className={Classes.val}>
                                {totalPrice}$
                            </span>
                        </p>
                        
                        <Button variant="primary" onClick={showReceiptModalHandler} disabled={totalPrice === 0}>Buy</Button>
                    </div>
                </Container>
            </div>
            {/* import receipt modal into another root out of the main root */}
            {ReactDOM.createPortal(<ReceiptModal onCloseReceiptModalHandler={closeReceiptModalHandler} show={showReceiptModal} />, document.getElementById("modals_root"))}
        </>
    )
};

export default Home;