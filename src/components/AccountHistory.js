import React from 'react';
import { Col, Tabs, Tab, Table } from 'react-bootstrap';


const AccountHistory = ({ data }) => {
    const { history } = data;
        
    return (
        <Col xs={12} lg={5} className='mt-lg-5'>
            <h3 className='mt-5'>Extrato de Conta Corrente</h3>
            <Tabs defaultActiveKey='latest' className='mt-3'>
                <Tab eventKey='latest' title='Últimos Lançamentos'>
                    <Table striped borderless>
                        <thead>
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Valor (R$)</th>
                            <th>Saldo (R$)</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                history.map(({ date, description, value, saldo }) => (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td>{value}</td>
                                        <td>{saldo}</td>
                                    </tr>
                                )) 
                            }                
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </Col>
    );
};

export default AccountHistory;