import React from "react";
import { Row, Col, Jumbotron, Image, Button } from 'react-bootstrap';
import logo from '../assets/logo__magic-pay.png';
import logoDesktop from '../assets/logo__magic-pay--mobile.png';
import './Hero.scss';

const Hero = () => (
    <Jumbotron className='text-light hero'>
        <Row className='py-lg-5 '>
            <Col lg className='hero-image my-lg-5'>
                <Image className='d-lg-none' src={logoDesktop} />
                <Image className='d-none d-lg-inline-block' src={logo} />
            </Col>
            <Col lg className='hero-text my-lg-5'>
                <p>Pague suas contas pelo nosso app</p>
                <Button variant="outline-light">Abra sua conta</Button>
            </Col>
        </Row>
    </Jumbotron>
);

export default Hero;