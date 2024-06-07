import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledSmallSidebarLinks = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    &.pending {
        color: var(--primary-500);
    }
`

const StyledSmallSidebarNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
    &:hover {
        color: var(--primary-500);
    }
`

const StyledSmallSidebarIcon = styled.span`
    font-size:1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
    &:hover {
        color: var(--primary-500);
    }   
    &:active {
        color: var(--primary-500);
    }
`

export {
    StyledSmallSidebarLinks,
    StyledSmallSidebarNavLink,
    StyledSmallSidebarIcon
}