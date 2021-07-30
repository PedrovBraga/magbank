import React, { useState } from 'react';
import { HashRouter as Route, Switch, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';
import '../components/AccountBalance';

import './Dashboard.scss';
import AccountBalance from '../components/AccountBalance';
import AccountPayments from '../components/AccountPayments';
import AccountHistory from '../components/AccountHistory';

const Dashboard = ({ name, account }) => {
    const [ activeLink, setActiveLink ] = useState(0);
    
    const links = [
        { text: 'Minha Conta', path: '/dashboard', exact: false },
        { text: 'Pagamentos', path:'/dashboard/payments' },
        { text: 'Extrato', path: '/dashboard/history' }
    ];

    const data = {
        latestBalance: [
            {date: '22/07', description: 'SAQUE 24h 012234', value: '300,00'},
            {date: '22/07', description: 'SUPERMERCADO 0112534', value: '275,00'},
            {date: '21/07', description: 'NETFLIX 235541', value: '30,00'},
            {date: '20/07', description: 'FARMÁCIA 1542', value: '350,00'},
        ],
        futureBalance: [
            {date: '22/08', description: 'SALÁRIO 24h 012234', value: '3000,00'},
            {date: '22/08', description: 'IMAGINE 0112534', value: '25,00'},
            {date: '21/08', description: 'NETFLIX 235541', value: '30,00'},
            {date: '20/08', description: 'RENDIMENTOS 1542', value: '350,00'},
        ],
        history: [
            { date: '12/07', description: 'Saque', value: '200,00', saldo: ''},
            { date: '12/07', description: 'Saldo do dia', value: '', saldo: '2500,00'},
            { date: '13/07', description: 'Saque', value: '50,00', saldo: ''},
            { date: '13/07', description: 'Compra Internet', value: '150,00', saldo: ''},
            { date: '13/07', description: 'Saldo do dia', value: '', saldo: '2300,00'},
            { date: '14/07', description: 'Supermercado', value: '250,00', saldo: ''},
            { date: '14/07', description: 'Adiantamento de salário', value: '1000,00', saldo: ''},
            { date: '14/07', description: 'Saldo do dia', value: '', saldo: '3050,00'},
        ]
    };
    
    return (
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
                            <h4>{name}</h4>
                            <p className='text-muted'>{account}</p>
                        </Col>
                    </Row>
                        {links.map(({ text, path, exact }, key) => (
                            <Link to={path} exact={exact ? exact : false} key={key}>
                                <Col sm={12} className='d-grid'>
                                    <Button className={`dashboard_button d-flex ${ key === activeLink ? 'dashboard_button-active' : '' }`} variant='link' size='lg' onClick={() => setActiveLink(key)}>
                                        {text}
                                    </Button>
                                </Col>
                            </Link>
                        )
                        )}
                </Col>
                <Switch> 
                    <Route path='/dashboard/payments'>
                        <AccountPayments />
                    </Route>
                    <Route path='/dashboard/history'>
                        <AccountHistory data={data} />
                    </Route>
                    <Route path='/dashboard'>
                        <AccountBalance data={data} />
                    </Route>                   
                </Switch>
            </Row>
        </Container>
    );
};

export default Dashboard;