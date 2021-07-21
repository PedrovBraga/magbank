import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.scss';

const Dashboard = () => (
    <Container className='dashboard py-5'>
        <Row>
            <Col xs={12} lg={4}>
                <Row className='align-items-center'>
                    <Col xs={4}>
                        <span className='dashboard_user-avatar'>
                            <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa'/>
                            <FontAwesomeIcon className='dashboard_user-icon' icon={faUser} size='3x' color='7c7d7d'/>
                        </span>
                    </Col>
                    <Col xs={8}>
                       <h4>Pedro Braga</h4>
                       <p className='text-muted'>ag: 1234 c/c: 4321-0</p>
                    </Col>
                </Row>
                <Row className='gap-2'>
                    <Col sm={12} className='d-grid'>
                        <Button className='dashboard_button d-flex' variant='link' size='lg'>
                            Minha Conta
                        </Button>
                    </Col>
                    <Col sm={12} className='d-grid'>
                        <Button className='dashboard_button d-flex' variant='link' size='lg'>
                            Pagamentos
                        </Button>
                    </Col>    
                    <Col sm={12} className='d-grid'>
                        <Button className='dashboard_button d-flex' variant='link' size='lg'>
                            Extrato
                        </Button>
                    </Col>
                </Row>    
            </Col>
            <Col xs={12} lg={3} className='mt-lg-5'>
                <h3 className='my-5'>Conta Corrente</h3>
                <h6>
                    <small><b>Saldo em conta corrente</b></small>
                </h6>
                <h4 className='text-success mb-4'>
                    <small>R$</small>3.500<small>,00</small>
                </h4>
                <h6><b>Cheque especial</b></h6>
                <p className='mb-0'>Limite disponível</p>
                <p className='mb-4'>R$5000</p>
                <Button variant='secondary'>Ver extrato</Button>
            </Col>
            <Col xs={12} lg={5}>
                
            </Col>
        </Row>
    </Container>
);

export default Dashboard;