import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import { addCart } from '../redux/Action';
import fakedata from "../fakedata/data"


const ProductDetailsScreen = () => {

    const params = useParams()
    const { id } = params
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addToCart = (product, quantity) =>{
        dispatch( addCart(product, quantity) )
    }

    useEffect(() => {

        const findProduct = () => {
            setLoading(true)
            // const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            const findData = fakedata.find((x) => x.id == id )
            setProduct(findData)
            setLoading(false)
            console.log(findData)
        }
        findProduct()

    }, [])


    const Loading = () => {
        return (
            <>
                <Col>
                    <Skeleton height={500} />
                </Col>
                <Col>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={100} />
                    <Skeleton height={50} width={150} />
                    <Skeleton height={50} width={140} />
                    <Skeleton height={50} width={200}/> 

                </Col>
            </>
        )
    }

    return (
        <div className='container mt-5 w-75 mx-auto'>
            <Row>
                {
                    loading ? <Loading /> : <>
                        <Col md={6}>
                            <img src={product.image} alt="" className='w-50 img-fluid' />
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                            <div className="details">
                                <h4>{product.title}</h4> 
                                {
                                    product.stock ? <Badge bg="success">Stock : {product.stock}</Badge> 
                                    : <Badge bg="danger">Unavilable</Badge> 
                                }
                                <p>{product.description}</p>
                                <h5>Price : ${product.price}</h5>
                                <h5>Rating : ({product.rating && product.rating.rate})</h5>
                                <Button variant="outline-dark mt-4" onClick={()=>addToCart(product, product.quantity)}>Add to cart</Button>
                                <LinkContainer to="/cart">
                                    <Button variant="dark mt-4 mx-2">Go to cart</Button>
                                </LinkContainer>
                            </div>
                        </Col>
                    </>
                }
            </Row>
        </div>
    );
};

export default ProductDetailsScreen;