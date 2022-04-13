import React from 'react';
import { Container, Section, Button, Level } from 'react-bulma-components';

const AddButtom = ({ onClick }) => {
    return(
        <Section>
            <Container>
                <Level className='level-right'>
                    <div className='level-right'>
                        <div className='level-item'>
                            <Button onClick={ onClick } color="primary" >Add</Button>
                        </div>
                    </div>
                </Level>
            </Container>
        </Section>
    )
}

export default AddButtom