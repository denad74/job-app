import { Form, Link } from "react-router-dom";
import styled from "styled-components";

const StyledRegisterContainer = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  `
const StyledLogoImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.38rem;
`

const StyledForm = styled(Form)`
  max-width: 400px;
  border-top: 5px solid var(--primary-500);
  width: 90vw;
  max-width: var(--fixed-width);
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  padding: 2rem 2.5rem;
  margin: 3rem auto;
`

const StyledHeadingExtraSmall = styled.h4`
  text-align: center;
  margin-bottom: 1.38rem;
  margin: 0;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: var(--letter-spacing);
  font-size: clamp(1rem, 2vw, 2rem); 
  `

const StyledRegisterText = styled.p`
  margin-top: 1rem;
  text-align: center;
  line-height: 1.5; 
  `
const StyledButton = styled.button`
width: 100%;
cursor: pointer;    
color: var(--white);
background: var(--primary-500);
border: transparent;
border-radius: var(--border-radius);
letter-spacing: var(--letter-spacing);
padding: 0.375rem 0.75rem;
box-shadow: var(--shadow-1);
transition: var(--transition);
text-transform: capitalize;
display: inline-block;
margin-top: 1rem;
&:hover{
  background: var(--primary-700);
  box-shadow: var(--shadow-3);
}
`

const StyledMemberButton = styled(Link)`
  color: var(--primary-500);
  letter-spacing: var(--letter-spacing);
  margin-left: 0.25rem;
`

export {
    StyledRegisterContainer,
    StyledLogoImg,
    StyledForm,
    StyledHeadingExtraSmall,
    StyledRegisterText,
    StyledButton,
    StyledMemberButton
}