/* eslint-disable react/prop-types */

import { StyledFormInput, StyledFormLabel, StyledFormRow } from "./styles";

const FormRow = ({type,name,labelText,defaultValue}) => {
  return (
    <StyledFormRow>
            <StyledFormLabel htmlFor={name}>{labelText || name}</StyledFormLabel>
            <StyledFormInput 
              type={type} 
              id={name} 
              name={name} 
              defaultValue={defaultValue || ""}
              required
              />
          </StyledFormRow>
  )
}

export default FormRow;