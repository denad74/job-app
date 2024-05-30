import styled from "styled-components";
import { devices } from "../../constants/breakpoints";


const StyledSmallSidebarWrapper = styled.aside`
@media only screen and (${devices.md}) {
        display: none;
    }`

const StyledSmallSidebarContainer = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    ${({ $showSidebar }) => $showSidebar ? `
        z-index: 99;
        opacity: 1;
        visibility: visible;
    ` : 
    `z-index: -1;
     opacity: 0;
     visibility: hidden;`}
`

const StyledSidebarContent = styled.div`
    background: var(--background-secondary-color);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

`

const StyledSidebarCloseButton = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
`

export {
    StyledSmallSidebarWrapper,
    StyledSmallSidebarContainer,
    StyledSidebarContent,
    StyledSidebarCloseButton,    
}
