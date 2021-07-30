import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Form, Image, Button } from 'react-bootstrap';
import logo from '../assets/logo.svg';

import './Login.scss';

const Login = ({ auth }) => {

    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const history = useHistory();

    const handleSubmit = () => {
        auth.login(name, account, history.push("/dashboard") );
    }

    return (
        <section className='login'>
            <div className='login_container'>
                <Row>
                    <Col className='text-center text-light'>
                        <Image src={logo} className='my-4'/>
                        <Form>
                        <Form.Group controlId='formBasicEmail'>
                                <Form.Label className='lead'><b>Nome e Sobrenome</b></Form.Label>
                                <Form.Control type='text' value={name} onChange={(e) => setName(e.currentTarget.value)}/>
                            </Form.Group>
                            
                            <Form.Group controlId='formBasicEmail' className='mt-3'>
                                <Form.Label className='lead'><b>Número da conta</b></Form.Label>
                                <Form.Control type='number' value={account} onChange={(e) => setAccount(e.currentTarget.value)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className='mt-3'>
                                <Form.Label className='lead'><b>Password</b></Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                            
                                <Button variant="success" type="submit" className='mt-4' onClick={handleSubmit}>
                                    Entrar
                                </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Login;