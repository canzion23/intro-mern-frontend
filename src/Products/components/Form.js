import React, { useState, useRef } from 'react'
import { Form as BulmaForm, Button } from 'react-bulma-components'

const { Field, Control, Label, Input } = BulmaForm

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    priceUnitary: '',
    size: '',
    description: '',    
  })

  const inputFileRef = useRef()
  
  const handleChange =(event) => {
    const { name, value } = event.target
    setFormValues({...formValues, [name]: value })  
  }

  const _handleSubmit = (e) => {
    e.preventDefault()    
    console.log(inputFileRef.current.files[0]);
  }
 
  return (
    <form onSubmit={_handleSubmit}>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input name='name' value={formValues.name} onChange={handleChange} type="text" placeholder="Product Name" />
        </Control>
      </Field>
      <Field>
        <Label>Unitary Price</Label>
        <Control>
          <Input name='priceUnitary' value={formValues.priceUnitary} onChange={handleChange} type="number" placeholder="Product Price" />
        </Control>
      </Field>
      <Field>
        <Label>Size</Label>
        <Control>
          <Input name='size' value={formValues.size} onChange={handleChange} type="number" placeholder="Product Size" />
        </Control>
      </Field>
      <Field>
        <Label>Description</Label>
        <Control>
          <Input name='description' value={formValues.description} onChange={handleChange} type="text" placeholder="Product Info" />
        </Control>
      </Field>
      <Field>
        <Label>Image</Label>
        <Control>
          <input type="file" ref={inputFileRef} />
        </Control>
      </Field>     
      <Button type='submit' className='button is-success' >Save</Button>
    </form>    
  );

  
};

export default Form;
