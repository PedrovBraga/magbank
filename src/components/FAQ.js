import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import IconText from './IconText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard,
    faWallet,
    faShieldAlt,
    faUserTie
} from '@fortawesome/free-solid-svg-icons';
import './FAQ.scss';

const Faq = () => {
    const options = [
        { icon: faCreditCard, text: 'Cartão de crédito' },
        { icon: faWallet, text: 'Conta e abertura' },
        { icon: faShieldAlt, text: 'Token digital'},
        { icon: faUserTie, text: 'Produtos e serviços'}
    ];

    const [ index, setIndex ] = useState(2);
    
    return (
        <section className='faq text-light'>
            <Container className='py-5'>
                <Row className='text-center'>
                    <h2 className='py-5 faq-title'>Dúvidas frequentes</h2>
                </Row>
                <Row className='d-flex align-items-center justify-items-center'>
                    <Col className='d-lg-none mb-5' xs={12}>
                        <Row>
                            {options.map(({ icon }, key) => (
                                <Col className='d-flex justify-content-center' key={key}>
                                    <FontAwesomeIcon icon={ icon } size='2x' color={key === index ? '#fff' : '#BBB'} onClick={() => setIndex(key)}/>
                                </Col>
                            ))
                            }
                        </Row>
                        <Row className='text-center mt-5'>
                            <p className='lead'>{options[index].text}</p>
                        </Row>
                    </Col>
                    
                    <Col className='d-none d-lg-block'>
                            {options.map(({ icon, text }, key) => 
                                <IconText icon={ icon } size={3} className='mb-3 faq-clickable' texClassName='lead' color={key === index ? '#fff' : '#BBB'} onClick={() => setIndex(key)} key={key}>
                                    {text}
                                </IconText>      
                            )} 
                    </Col>

                    <Col>
                        <Accordion defaultActiveKey='0' activeKey={`${index}`}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey='0'>
                                Cartão de crédito
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='0'>
                                    <Card.Body>
                                        Lorem ipsum dolor sit amet, consectur adipscing elit. Nullum tincident arcu vel arcu fermentunm, eget accunsan dolor dignissim. Nam eget quan semper, variaus ligula sed, auctor aunge. Nullum tincident arcu vel arcu fermentunm.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey='1'>
                                    Conta e abertura
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='1'>
                                    <Card.Body>
                                    Lorem ipsum dolor sit amet, consectur adipscing elit. Nullum tincident arcu vel arcu fermentunm, eget accunsan dolor dignissim. Nam eget quan semper, variaus ligula sed, auctor aunge. Nullum tincident arcu vel arcu fermentunm, eget accunsan dolor dignissim. Nam eget quan semper, variaus ligula sed, auctor aunge.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey='2'>
                                        Token digital
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey='2'>
                                    <Card.Body>
                                        Lorem ipsum dolor sit amet, consectur adipscing elit. Nullum tincident arcu vel arcu fermentunm, eget accunsan dolor dignissim. Nam eget quan semper, variaus ligula sed, auctor aunge. Nullum tincident arcu vel arcu fermentunm.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey='3'>
                                    Produtos e serviços
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='3'>
                                    <Card.Body>
                                    Lorem ipsum dolor sit amet, consectur adipscing elit. Nullum tincident arcu vel arcu fermentunm, eget accunsan dolor dignissim. Nam eget quan semper, variaus ligula sed, auctor aunge. Nullum tincident arcu vel arcu fermentunm, eget accunsan dolor dignissim. Nam eget quan semper, variaus ligula sed, auctor aunge.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Faq;