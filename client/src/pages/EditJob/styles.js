import { Form } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../constants/breakpoints";

const StyledEditJobWrapper = styled.article`
    border-radius: var(--border-radius);
    width: 100%;
    background: var(--background-secondary-color);
    padding: 3rem 2rem 4rem;
    box-shadow: var(--shadow-2);
`

const StyledEditJobFormContainer = styled(Form)`
    margin: 0;
    border-radius: 2rem;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
`

const StyledEditJobForm = styled.div`
    margin-bottom: 0;
    display: grid;
    row-gap: 1rem;
    @media only screen and (${devices.md}) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
        column-gap: 1rem;
    }
    @media only screen and (${devices.lg}) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const StyledEditJobTitle = styled.h4`
    margin-bottom: 2rem;
`

const  StyledEditJobButton = styled.button`
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: var(--border-radius);
    letter-spacing: var(--letter-spacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    text-transform: capitalize;
    width: 100%;
    align-self: end;
    margin-bottom: 1rem;
    display: grid;
    place-items: center;
    height: 32px;
    &:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-3);
    }
`

export {
    StyledEditJobWrapper,
    StyledEditJobFormContainer,
    StyledEditJobTitle,
    StyledEditJobForm,
    StyledEditJobButton
}