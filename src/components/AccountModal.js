import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AccountModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Abra sua conta</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Seu nome</Form.Label>
                    <Form.Control type="text" placeholder="Seu nome" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seu email</Form.Label>
                    <Form.Control type="email" placeholder="Seu email" />
                </Form.Group>

                <Form.Group controlId="formCity">
                    <Form.Label
                        className="me-sm-2"
                        htmlFor="formCitySelect"
                    >
                        Preference
                    </Form.Label>
                    <Form.Control as="select" className="me-sm-2" id="formCitySelect" custom>
                        <option value="0">Sanja</option>
                        <option value="1">Rio</option>
                        <option value="2">Sampa</option>
                        <option value="3">Floripa</option>
                        <option value="3">Opção 5</option>
                        <option value="3">Opção 6</option>
                        <option value="3">Opção 7</option>
                        <option value="3">Opção 8</option>
                        <option value="3">Opção 9</option>
                        <option value="3">Opção 10</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
            <Button variant="primary" onClick={handleClose}>Criar Conta</Button>
        </Modal.Footer>
    </Modal>
);

export default AccountModal;