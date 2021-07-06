import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../components/CenteredButton.scss';

const CenteredButton = ({ children }) => (
    <Container>
        <Row className='d-flex justify-content-center'>
            <Col md="auto">
                <Button className='my-5 px-5' variant='success' size='lg'>
                    {children} 
                </Button>
            </Col>
        </Row>
    </Container>
);

export default CenteredButton;