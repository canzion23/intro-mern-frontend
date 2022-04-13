import React from 'react';
import { Columns, Card, Content, Heading } from 'react-bulma-components';

const ListProducts = ({ products }) => {
  return (    
        <Columns>
        {
          products.map(({ _id, name, size, unitaryPrice, description, imgUrl }) => (
            <Columns.Column size={5}  key= {_id}>
              <Card>
                <Card.Image size="square" src={imgUrl} />
                <Card.Content>
                  <Content>
                    <Heading>{name}</Heading>
                    <Heading subtitle size={6}>Price: {unitaryPrice}</Heading>
                    <p>
                      {
                        description
                      }
                    </p>
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
          ))
        }    
        </Columns>
  )
}

export default ListProducts;
