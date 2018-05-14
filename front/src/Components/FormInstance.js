import React from 'react';
import FieldGroup from './FieldGroup';
import { Button,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
const FormInstance = () => {
    return (<div>
      <FieldGroup
        id="formControlsText"
        type="text"
        label="Company Name"
        placeholder="Enter Your Company's Name"
      />
      <FieldGroup
        id="formControlsEmail"
        type="email"
        label="Email address"
        placeholder="Enter email"
      />
      <FieldGroup
        id="formControlsFile"
        type="file"
        label="Upload Something:"
        // help="Example block-level help text here."
      />
      
      <FormGroup controlId="formControlsTextarea" bsSize ="large">
        <ControlLabel>Message</ControlLabel>
        <FormControl componentClass="textarea" placeholder="Write Something..." />
      </FormGroup>
  
      {/* <FormGroup>
        <ControlLabel>Static text</ControlLabel>
        <FormControl.Static>email@example.com</FormControl.Static>
      </FormGroup> */}
  
      <Button type="submit">Submit</Button>
    </div>
    )};

    export default FormInstance;