import React, { useState, useEffect } from 'react';
import { Section, Container } from 'react-bulma-components';

import { Loading } from './index';
import { getProducts } from '../services';


const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true)    
    const [products, setProducts] = useState([])    
    
    useEffect( () => {
      async function loadProducts() {
        const response = await getProducts()
        
        if (response.status === 200) {
          setProducts(response.data.products)
          console.log(response.data.products);
        }
    }

    loadProducts()

  }, [])

  if (isLoading) {
    <Loading />
  }

  if (!products.length) {
    return (      
      <Section>
            <Container>
                <h2 className='title has-text-centered'>You dont\'t have products</h2>
            </Container>
        </Section>
      )
  }

    return (                    
      <Section>
            <Container>
                <h2 className='title has-text-centered'>You have {products.length} products</h2>
            </Container>
        </Section>
    )
}

export default ListProducts