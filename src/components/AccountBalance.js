import React from 'react';
import { Col, Tabs, Tab, Table, Button } from 'react-bootstrap';

const AccountBalance = ({ data }) => {
    const { latestBalance, futureBalance } = data;

    return (
        <>
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
                    <Col xs={12} lg={5} className='mt-5'>
                        <Tabs defaultActiveKey='latest' className='mt-lg-5 pt-lg-5'>
                            <Tab eventKey='latest' title='Últimos Lançamentos'>
                                <Table striped borderless>
                                    <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Descrição</th>
                                        <th>Valor (R$)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            latestBalance.map(({ date, description, value }) => (
                                                <tr>
                                                    <td>{date}</td>
                                                    <td>{description}</td>
                                                    <td>{value}</td>
                                                </tr>
                                            )) 
                                        }
                                        
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey='future' title='Lançamentos futuros'>
                                <Table striped borderless>
                                    <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Descrição</th>
                                        <th>Valor (R$)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            futureBalance.map(({ date, description, value }) => (
                                                <tr>
                                                    <td>{date}</td>
                                                    <td>{description}</td>
                                                    <td>{value}</td>
                                                </tr>
                                            )) 
                                        }                                    
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>
                    </Col>
        </>
    );
};

export default AccountBalance;