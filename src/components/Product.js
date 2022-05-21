import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
// import fakedata from "../fakedata/data"
import Skeleton from 'react-loading-skeleton'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Product = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true)
            const { data } = await axios.get(`https://fakestoreapi.com/products`)
            setData(data)
            setFilter(data)
            setLoading(false)
        }
        getProducts()

    }, [])

    const Loading = () => {
        return (
            <>
                <Col>
                    <Skeleton height={300} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={150} style={{ margin: "4px 4px" }} />
                    <Skeleton height={20} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={150} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={140} style={{ margin: "4px 4px" }} />
                    <Skeleton height={20} width={120} style={{ margin: "4px 4px" }} />
                </Col>
                <Col>
                    <Skeleton height={300} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={150} style={{ margin: "4px 4px" }} />
                    <Skeleton height={20} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={150} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={140} style={{ margin: "4px 4px" }} />
                    <Skeleton height={20} width={120} style={{ margin: "4px 4px" }} />
                </Col>
                <Col>
                    <Skeleton height={300} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={150} style={{ margin: "4px 4px" }} />
                    <Skeleton height={20} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={150} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={140} style={{ margin: "4px 4px" }} />
                    <Skeleton height={20} width={120} style={{ margin: "4px 4px" }} />
                </Col>
                <Col>
                    <Skeleton height={300} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={150} style={{ margin: "4px 4px" }} />
                    <Skeleton height={20} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={150} style={{ margin: "4px 4px" }} />
                    <Skeleton height={10} width={140} style={{ margin: "4px 4px" }} />
                    <Skeleton height={20} width={120} style={{ margin: "4px 4px" }} />
                </Col>
            </>
        )
    }

    const filterproducts = (item) => {

        const updateProduct = data.filter((x) => x.category === item)
        setFilter(updateProduct)

    }

    return (
        <div className='container mt-5'>
            <Row>
                <div className="filteritem d-flex justify-content-center my-5">
                    <Button variant="outline-dark m-1" onClick={() => setFilter(data)}>All</Button>
                    <Button variant="outline-dark m-1" onClick={() => filterproducts("men's clothing")}>Men's clothing</Button>
                    <Button variant="outline-dark m-1" onClick={() => filterproducts("jewelery")}>Jewelery</Button>
                    <Button variant="outline-dark m-1" onClick={() => filterproducts("electronics")}>Electronics</Button>
                    <Button variant="outline-dark m-1" onClick={() => filterproducts("women's clothing")}>Women's clothing</Button>
                </div>
            </Row>
            <Row>
                {
                    loading ? <Loading /> :
                        filter.map(product => {
                            return (
                                <Col md={6} lg={3} key={product.image}>
                                    <Card className="my-2">
                                        <Card.Img variant="top" src={product.image} style={{ height: "300px" }} />
                                        <Card.Body>
                                            <Card.Title>{product.title.substring(0, 12)}</Card.Title>
                                            <Card.Text>
                                                {product.description.substring(0, 50)}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Price : ${product.price}</strong>
                                            </Card.Text>
                                            <Card.Text>
                                                <span>Rating : {product.rating.rate}</span>
                                            </Card.Text>
                                            <LinkContainer to={`/product/${product.id}`}>
                                                <Button variant="outline-dark">Buy now</Button>
                                            </LinkContainer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                }
            </Row>
        </div>
    );
};

export default Product;