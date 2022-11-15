import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
    faMobileAlt,
    faMobile,
    faGlobe,
    faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import IconText from './IconText';
import './Institutional.scss';


const Institutional = () => (
    <section className='institutional text-white py-5'>
        <Container id='quemsomos'>
            <Row>
                <Col xs={12} lg={5}></Col> 
                <Col xs={12} lg={7}>
                    <h2 className='display-4 institutional-title'>Já nascemos digital</h2>
                    <p className='my-5'>Lorem ipsum dolor sit amet, consectur adipscing elit. Nullum tincident arcu vel arcu fermentunm, eget accunsan dolor dignissim. Nam eget quan semper, variaus ligula sed, auctor aunge.</p>
                    <IconText icon={faMobileAlt} color='#fff'>
                        Sem fila e sem burocracia
                    </IconText>
                    <IconText icon={faMobile} color='#fff'>
                        Simples e prático
                    </IconText>
                    <IconText icon={faGlobe} color='#fff'>
                        Abertura de conta 100% online
                    </IconText>
                    <IconText icon={faShieldAlt} color='#fff'>
                        Transações mais seguras
                    </IconText>
                    <Button variant='outline-light' className='my-5'>Abra sua conta</Button>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Institutional;
