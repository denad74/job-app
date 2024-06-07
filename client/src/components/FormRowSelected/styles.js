
import styled from "styled-components";

const StyledSelectedInputContainer = styled.div`
    margin-bottom: 1rem;
`
const StyledSelectedInputLabel = styled.label`
display: block;
  font-size: var(--small-text);
  margin-bottom: 0.75rem;
  text-transform: capitalize;
  letter-spacing: var(--letter-spacing);
  line-height: 1.5;`
const StyledSelectedInput = styled.select`
width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: var(--border-radius);
  background: var(--background-color);
  border: 1px solid var(--grey-300);
  color: var(--text-color);`
const StyledSelectedInputOption = styled.option``
export {
    StyledSelectedInputContainer,
    StyledSelectedInputLabel,
    StyledSelectedInput,
    StyledSelectedInputOption
}