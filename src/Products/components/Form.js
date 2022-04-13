import React, { useState, useRef } from 'react';
import { Form as BulmaForm, Button } from 'react-bulma-components';

// Desestructuración del objeto Formulario (que es un componente del framework Bulma (css) )
const { Field, Control, Label, Input } = BulmaForm;

/*
 *handleSubmit es utilizado como una propiedad (props) de la funcion Form para que sea utilizado
 *por el objeto padre que lo llame. Como un manejador de eventos.
 */
const Form = ({ handleSubmit }) => {
  /* 
  Se utilizan variables de tipo Hook para obtener y settear valores de un estado
  el formValues es un objeto que contiene todos los atributos necesarios para nuestro modelo
*/
  const [formValues, setFormValues] = useState({
    name: '',
    unitaryPrice: '',
    size: '',
    description: '',
  });

  /*
  Se utiliza el Hook useRef para obtener una referencia al DOM y controlar por medio de React
  un componente no controlado de formulario (input tipo file) y poder obtender su valor
*/
  const inputFileRef = useRef();

  // Esta función es utilizada como manejador para obtener y controlar los valores del formulario
  const handleChange = (event) => {
    const { name, value } = event.target; // en todo momento se puede obtener el valor en base al evento onPress
    setFormValues({ ...formValues, [name]: value });
  };

  // Función interna o privada, que sirve para manejar el evento submit del formulario
  const _handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del evento submit (enviar form)
    // ! ...formValues sirve para todos los atributos del formulario
    handleSubmit({ ...formValues, image: inputFileRef.current.files[0] });
    // console.log(`TCL: -> Form -> inputFileRef`, inputFileRef.current.files[0]);
  };

  return (
    <form onSubmit={_handleSubmit}>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input
            name="name"
            value={formValues.name}
            onChange={handleChange}
            type="text"
            placeholder="Product Name"
          />
        </Control>
      </Field>
      <Field>
        <Label>Unitary Price</Label>
        <Control>
          <Input
            name="unitaryPrice"
            value={formValues.unitaryPrice}
            onChange={handleChange}
            type="number"
            placeholder="Product Price"
          />
        </Control>
      </Field>
      <Field>
        <Label>Size</Label>
        <Control>
          <Input
            name="size"
            value={formValues.size}
            onChange={handleChange}
            type="number"
            placeholder="Product Size"
          />
        </Control>
      </Field>
      <Field>
        <Label>Description</Label>
        <Control>
          <Input
            name="description"
            value={formValues.description}
            onChange={handleChange}
            type="text"
            placeholder="Product Info"
          />
        </Control>
      </Field>
      <Field>
        <Label>Image</Label>
        <Control>
          <input type="file" ref={inputFileRef} />
        </Control>
      </Field>
      <Button type="submit" className="button is-success">
        Save
      </Button>
    </form>
  );
};

export default Form;
