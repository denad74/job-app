import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';


const StyledNav = styled.nav`
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
`

const StyledPage = styled.section`
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
    @media only screen and (${devices.md}) {
    grid-template-columns: 1fr 400px;
    column-gap: 3rem;
  }
`

const StyledHeader = styled.h1`
    font-weight: 700;
    span {
        color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
`

const StyledText = styled.p`
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35rem;
`
const StyledRegisterLink = styled(Link)`
    margin-right:1rem;
    padding: 0.75rem 1rem;
`
const StyledButtonLink = styled(Link)`
    padding: 0.75rem 1rem;
`

const StyledImage = styled.img`
    display:none;
    @media only screen and (${devices.md}) {
    display: block;
  }
`

export { 
    StyledNav,
    StyledPage,
    StyledHeader,
    StyledText, 
    StyledButtonLink, 
    StyledRegisterLink, 
    StyledImage};