import styled from "styled-components";
import { devices } from "../../constants/breakpoints";

const StyledNavBarWrapper = styled.div`
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0 0 rgba(0,0,0,0.1);
    background: var(--background-secondary-color);
    @media only screen and (${devices.md}) {
        position: sticky;
        top: 0;
    }
`

const StyledNavbarContainer = styled.div`
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
    @media only screen and (${devices.md}) {
        width: 90%;
    }
`

const StyledToggleButton = styled.div`
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;`

const StyledLogoContainer = styled.div`
    /* display: flex;
    align-items: center;
    width: 100px;
    @media only screen and (${devices.md}) {
        display: none;
    } */
 `
    
const StyledLogoText = styled.h4`
    display: none;
    @media only screen and (${devices.md}) {
        display: block;
    }
`

const StyledNavbarButton = styled.div`
    display: flex;
    align-items: center;    
`

export {
    StyledNavBarWrapper,
    StyledNavbarContainer,
    StyledLogoContainer,
    StyledToggleButton,
    StyledLogoText,
    StyledNavbarButton
}