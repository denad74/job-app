import styled from "styled-components";
import { devices } from "../../constants/breakpoints";
const StyledBigSidebarWrapper = styled.div`
    display: none;
    @media only screen and (${devices.md}) {
        display: block;
        box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.1);
    }
`

const StyledBigSidebarContainer = styled.div`
    background: var(--background-secondary-color);
    min-height: 100vh;
    height: 100%;
    width: 250px;
    transition: margin-left 0.3s ease-in-out;
    ${({ $showSidebar }) => $showSidebar ? `
        margin-left: -250px;
    ` : 
    `margin-left: 0;`}
`
const ShowSidebarContent = styled.div`
    position: sticky;
    top: 0;
`
const StyledBigSidebarHeader = styled.header`
    height: 6rem;
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
`

export {
    StyledBigSidebarWrapper,
    StyledBigSidebarContainer,
    ShowSidebarContent,
    StyledBigSidebarHeader
}