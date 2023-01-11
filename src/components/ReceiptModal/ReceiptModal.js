// node imports
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Classes from './ReceiptModal.module.scss';

// components imports
import { Modal, Button } from 'react-bootstrap';

// context imports
import productsContext from '../../context/ProductsContext';


const ReceiptModal = (props) => {
    const { cartProducts, totalPrice } = useContext(productsContext);
    const navigate = useNavigate();

    const handleClose = () => {
        props.onCloseReceiptModalHandler(false);
        navigate("/success");
    };

    return (
        <>
            <Modal show={props.show} onHide={handleClose} centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Receipt Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {Object.values(cartProducts).map((product, i) => {
                            return <div className={Classes['product-row']} key={product.id}>
                                    <p className={Classes.name}>
                                        {product.name}
                                    </p>
                                    <p className={Classes.price}>
                                        {(product.price * product.quantity).toFixed(2)}$
                                    </p>
                                </div>
                        })}
                    </div>
                    <div className={Classes.total}>
                        <p className={Classes.title}>Total Price</p>
                        <p className={Classes.price}>${totalPrice}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Done</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReceiptModal;