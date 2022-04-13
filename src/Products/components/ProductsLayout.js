import React, { useState } from 'react';
import { Modal } from 'react-bulma-components';

import { Form, Header, AddButtom, ListProducts } from './index';

const ProductsLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header title="Products app" />
      <AddButtom onClick={() => setIsModalOpen(true)} />
      <ListProducts />
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Card>
          <Modal.Card.Header>
            <Modal.Card.Title>Add Product</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Form />
            {/* <label className='label'>Name:</label>
                  <input className='input' placeholder="Nombre producto"></input>
                  <label className='label' type='Number'>Size:</label>
                  <input className='input' placeholder="Size"></input>
                  <label className='label'>Unitary Price:</label>
                  <input className='input' placeholder="set Unitary Price"></input> */}
          </Modal.Card.Body>
          <Modal.Card.Footer>
            {/* <button className="button is-success" >Save changes</button>
            <button onClick={() => setIsModalOpen(false)} className="button">
              Cancel
            </button> */}
          </Modal.Card.Footer>
        </Modal.Card>
      </Modal>
    </>
  );
};

export default ProductsLayout;
