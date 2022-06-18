import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({ show, onHide }) => {
  const [brand, setBrand] = useState('');

  const addBrand = () => {
    createBrand({ name: brand }).then(() => setBrand(''));
    onHide();
  };

  return (
    <Modal show={show} size="lg" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Brand"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
