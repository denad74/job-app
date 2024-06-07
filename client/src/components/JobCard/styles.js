import { Form, Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../constants/breakpoints";

const jobStatusStyles = {
    pending: {
      backgroundColor: '#fef3c7',
      color: '#f59e0b'
    },
    interview: {
      backgroundColor: '#e0e8f9',
      color: '#647acb'
    },
    decline: {
      backgroundColor: '#ffeeee',
      color: '#d66a6a'
    }
  };

const StyledJobCardWrapper = styled.article`
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: grid;
    grid-template-rows: 1fr auto;
    box-shadow: var(--shadow-2);
`

const StyledJobCardHeader = styled.header`
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
`

const StyledJobCardTitle = styled.h5`
    /* font-weight: 700; */
    margin-bottom: 0.5rem;
`
const StyledJobCardIcon = styled.div`
    width:60px;
    height: 60px;
    display: grid;
    place-content: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
`

const StyledJobCardInfo = styled.div``

const StyledJobCardText = styled.p`
    margin: 0;
    text-transform: capitalize;
    color: var(--text-secondary-color);
    letter-spacing: var(--letter-spacing);
`

const StyledJobCardContentContainer = styled.div`
    padding: 1rem 1.5rem;
`

const StyledJobCardContent = styled.div`
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media only screen and (${devices.md}) {
        grid-template-columns: 1fr 1fr;
    }
`

const  StyledJobCardStatus = styled.div`
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 100%;
    height: 30px;
    display: grid;
    align-items: center;
    ${({ $jobStatus }) => `
    background-color: ${jobStatusStyles[$jobStatus]?.backgroundColor};
    color: ${jobStatusStyles[$jobStatus]?.color};
  `}
`

const StyledJobCardFooter = styled.footer`
    margin-top: 1rem;
    display: flex;
    align-items: center;
`


const StyledJobCardLink = styled(Link)`
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
    height: 30px;
    font-size: 0%.85rem;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    &:hover {
        background: var(--primary-700);
         box-shadow: var(--shadow-3);
        }
`

const StyledJobCardForm = styled(Form)``

const StyledJobCardButton = styled.button`
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
    height: 30px;
    font-size: 0%.85rem;
    display: flex;
    align-items: center;
    &:hover {
        background: var(--primary-700);
         box-shadow: var(--shadow-3);
        }
`


export {
    StyledJobCardWrapper,
    StyledJobCardTitle,
    StyledJobCardHeader,
    StyledJobCardIcon,
    StyledJobCardInfo,
    StyledJobCardText,
    StyledJobCardContentContainer,
    StyledJobCardContent,
    StyledJobCardStatus,
    StyledJobCardFooter,
    StyledJobCardLink,
    StyledJobCardForm,
    StyledJobCardButton
}