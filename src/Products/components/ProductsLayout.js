import React, { useState, useEffect } from 'react'
import { Modal, Section, Container } from 'react-bulma-components'

import { Form, Header, AddButtom, ListProducts, Loading } from './index'
import { saveProduct, getProducts } from '../services'

const ProductsLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  async function loadProducts() {
    const response = await getProducts()

    if (response.status === 200) {
      setProducts(response.data.products)
      console.log(`TCL: -> loadProducts -> response.data.products`, response.data.products)
    }
    
    setIsLoading(false)
  }
  useEffect(() => {
    loadProducts()
  }, []);

  /*
    Esta función es la que se encarga de enviar la información recibida por medio del objeto data
    a la función saveProduct del Servicio
  */
  const handleSubmit = async (data) => {
    await saveProduct(data)
    loadProducts()
    setIsModalOpen(false)
  };

  return (
    <>
      <Header title="Products app" />
      <AddButtom onClick={() => setIsModalOpen(true)} />
      {
        isLoading && <Loading />
      }

      {
        !products.length && (
        <Section>
          <Container>
            <h2 className="title has-text-centered">
              You dont\'t have products
            </h2>
          </Container>
        </Section>
        )
      }
      <Section>
        <Container>
          <ListProducts products={products} />
        </Container>
      </Section>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Card>
          <Modal.Card.Header>
            <Modal.Card.Title>Add Product</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Form handleSubmit={handleSubmit} />
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
