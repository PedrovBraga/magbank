import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Image, Button } from 'react-bootstrap';
import logo from '../assets/logo.svg';

import './Login.scss';

const Login = () => (
    <section className='login'>
        <div className='login_container'>
            <Row>
                <Col className='text-center text-light'>
                    <Image src={logo} className='mb-5'/>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label className='lead'><b>Número da conta</b></Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className='mt-3'>
                            <Form.Label className='lead'><b>Password</b></Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        
                        <Link to='/dashboard'>
                            <Button variant="success" type="submit" className='mt-5'>
                                Criar conta
                            </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </div>
    </section>
);

export default Login;