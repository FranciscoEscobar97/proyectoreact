import React from 'react'
import { Form } from 'semantic-ui-react'

const InputSelect = () => (
  <Form>
    <Form.Group widths='equal'>
      
      <Form.Field label='Selecciona tu talla' control='select'>
        <option value='small'>Small(S)</option>
        <option value='medium'>Medium(M)</option>
        <option value='large'>Large(L)</option>
      </Form.Field>
    </Form.Group>

  </Form>
)

export default InputSelect
