import React from 'react';
import { Container, Section, Button, Level } from 'react-bulma-components';

const AddButton = () => {
    return(
        <Section>
            <Container>
                <Level className='level-right'>
                    <div className='level-right'>
                        <div className='level-item'>
                            <Button color="primary">Add</Button>
                        </div>
                    </div>
                </Level>
            </Container>
        </Section>
    )
}

export default AddButton