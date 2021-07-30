import React from 'react';
import { Col, Row, Tabs, Tab, Button, Form } from 'react-bootstrap';

const AccountPayments = () => (
        
        
            <Col xs={12} lg={5} className='mt-lg-5'>
                <h3 className='mt-5'>Pagamentos</h3>
                <Tabs defaultActiveKey='boleto' className='mt-3'>
                    <Tab eventKey='boleto' title='Boleto'>
                        <Form>
                            <Form.Group className="mt-4" controlId="formBarCode">
                                <Form.Label>Código de Barras</Form.Label>
                                <Form.Control type="number" placeholder="Insira o código de barras" />
                            </Form.Group>

                           <Form.Group className='my-4' controlId="formPaymentType">
                                <Form.Label>Forma de Pagamento</Form.Label>
                                <Form.Check 
                                    type='radio' 
                                    id='debit' 
                                    label='Débito em Conta Corrente'
                                    name='paymentType'
                                />
                                <Form.Check 
                                    type='radio' 
                                    id='credit' 
                                    label='Cartão de Crédito'
                                    name='paymentType'
                                />
                           </Form.Group>
                            <Button variant="success" className='mt-'>
                                Continuar
                            </Button>
                        </Form>
                    </Tab>
                    <Tab eventKey='transfer' title='Transferência'>
                        <Form>
                            <Row className="mt-4">
                                <Form.Group as={Col}>
                                    <Form.Label>Banco</Form.Label>
                                    <Form.Control as="select" >
                                        <option value="0">Banco do Brasil</option>
                                        <option value="1">Inter</option>
                                        <option value="2">Santander</option>
                                        <option value="4">Nubank</option>
                                        <option value="5">Caixa</option>
                                        <option value="6">Itaú</option>
                                        <option value="7">BMG</option>
                                        <option value="8">Opção 8</option>
                                        <option value="9">Opção 9</option>
                                        <option value="10">Opção 10</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Agência</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Conta Corrente</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Row>
                            <Row className="my-4">
                                <Form.Group as={Col}>
                                    <Form.Label>Valor da Transferência</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Descrição no Extrato</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Row>
                            <Button variant="success">
                                Continuar
                            </Button>
                        </Form>
                    </Tab>
                </Tabs>
            </Col>
        
);

export default AccountPayments;