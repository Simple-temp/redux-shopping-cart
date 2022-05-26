
import React from 'react';
import { Alert, Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart, deleteCart, removeCart } from '../redux/Action';

const CartScreen = () => {

    const products = useSelector((state) => state.handleCart)

    const dispatch = useDispatch()

    const handleCartItemIncrease = (product) => {
        dispatch(addCart(product))
    }

    const handleCartItemDecrese = (product) => {
        dispatch(removeCart(product))
    }

    const handleCartItemDelete = (product) => {
        dispatch(deleteCart(product))
    }

    const itemPrice = products.reduce((a, c) => a + c.quantity * c.price, 0)
    const totalTax = itemPrice * 10 / 100
    const totalPrice = itemPrice + totalTax

    return (
        <div className='container mt-5'>
            <Row>
                <Col md={8}>
                    {
                        products.length === 0 && <Alert variant="primary">
                            Your cart is empty <Link to="/products">Go to Shopping</Link>
                        </Alert>
                    }
                    {
                        products.map(product => (
                            <Row key={product.id} className="my-2 border">
                                <Col md={3} className="d-flex align-items-center justify-content-center p-1 border">
                                    <img src={product.image} className="img-fluid h-50" alt="" />
                                </Col>
                                <Col md={3} className="d-flex align-items-center justify-content-center p-1 border">
                                    <Link to={`/product/${product.id}`}>
                                        <h6>{product.title.substring(0, 15)}</h6>
                                    </Link>
                                </Col>
                                <Col md={3} className="d-flex align-items-center justify-content-center p-1 border">
                                    <Button className="mx-1" variant="outline-dark" onClick={() => handleCartItemDecrese(product)}>
                                        <i className="fa-solid fa-minus"></i>
                                    </Button>
                                    <span className='mx-2'>{product.quantity}</span>
                                    <Button className="mx-1" variant="outline-dark" onClick={() => handleCartItemIncrease(product)}>
                                        <i className="fa-solid fa-plus"></i>
                                    </Button>
                                </Col>
                                <Col md={3} className="p-1 border d-flex align-items-center justify-content-center">
                                    <Button variant="outline-dark" onClick={() => handleCartItemDelete(product)}>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </Button>
                                </Col>
                            </Row>
                        ))
                    }
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Total Item : {products.length}</ListGroup.Item>
                            <ListGroup.Item>Total Item Price : ${itemPrice.toFixed(2)}</ListGroup.Item>
                            <ListGroup.Item>Total tax : {totalTax.toFixed(2)}</ListGroup.Item>
                            <ListGroup.Item>Total Price : {totalPrice.toFixed(2)}</ListGroup.Item>
                            <Button variant='outline-dark' className='py-3 m-2' >Place Order</Button>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CartScreen;