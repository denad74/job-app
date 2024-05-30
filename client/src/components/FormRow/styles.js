import styled from 'styled-components';

const StyledFormRow = styled.div`
    margin-bottom: 1rem;
`

const StyledFormLabel = styled.label`
  display: block;
  font-size: var(--small-text);
  margin-bottom: 0.75rem;
  text-transform: capitalize;
  letter-spacing: var(--letter-spacing);
  line-height: 1.5;
`

const StyledFormInput = styled.input`
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: var(--border-radius);
  background: var(--background-color);
  border: 1px solid var(--grey-300);
  color: var(--text-color);
  `
export {
    StyledFormRow,
    StyledFormLabel,
    StyledFormInput
}
