import React, {useState, useEffect} from "react";
import Axios from "axios";
import CartItem from "./CartItem";
import {random, commerce} from "faker";
import {Container, Col, Row } from "reactstrap";

const apiKey = "PMVgWYN7khfecb9Oe9M2TQvjQgJeToyYiHcZiZDRu7vMQFojV5LL5ZVk"
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const localUrl = "https://www.jsonkeeper.com/b/6RRY"

const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([])

    // const fetchPhotos = async () => {
    //     const {data} = await Axios.get(url, {
    //         Header:{
    //             Authorization: apiKey
    //         }
    //     });
    //     const {photos} = data;

    //     const allProduct = photos.map(photo => ({
    //         smallImage: photo.src.medium,
    //         tinyImage: photo.src.tiny,
    //         productName: random.word(),
    //         productPrice: commerce.price(),
    //         id: random.uuid()
    //     }));

    //     setProduct(allProduct);

    // };
    const fetchPhotos = async () => {
        const {data} = await Axios.get(localUrl)
    

        const {photos} = data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }));

        setProduct(allProduct);

    };

        useEffect(() => {
            fetchPhotos()
        }, [])

        return (
            <Container fluid>
                <h1 className="text-success text-center">
                    Buy Page
                </h1>
                <Row>
                    {product.map(product => (
                        <Col md={8} key={product.id}>
                            <CartItem product={product} addInCart={addInCart} />
                        </Col> 
                    ))}
                </Row>
            </Container>
        )
};

export default BuyPage;