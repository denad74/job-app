/* eslint-disable react/prop-types */
import { 
    StyledSelectedInputContainer,
    StyledSelectedInputLabel,
    StyledSelectedInput ,
    StyledSelectedInputOption
  } from './styles';

const FormRowSelected = ({name, labelText, list, defaultValue = ''}) => {
  return (
    <StyledSelectedInputContainer>
            <StyledSelectedInputLabel htmlFor={name}>
              {labelText || name}
            </StyledSelectedInputLabel>
            <StyledSelectedInput name={name} id={name} defaultValue={defaultValue}>
              {list.map((itemValue) => {
                return <StyledSelectedInputOption key={itemValue} value={itemValue}>
                  {itemValue}
                </StyledSelectedInputOption>
              })}
              
            </StyledSelectedInput>
          </StyledSelectedInputContainer>
  )
}

export default FormRowSelected;
