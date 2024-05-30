import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledErrorContainer = styled.main`
    min-height: 100vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledErrorImg = styled.img`
    width: 90vh;
    min-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
`

const StyledHeading = styled.h3`
    margin-bottom: 0.5rem;
`

const StyledErrorText = styled.p`
    line-height:1.5;
    margin-top: 0%.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
`

const StyledErrorLink = styled(Link)`
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
`

export {
    StyledErrorContainer,
    StyledHeading,
    StyledErrorImg,
    StyledErrorText,
    StyledErrorLink
}