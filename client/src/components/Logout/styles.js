import styled from "styled-components";

const StyledLogoutWrapper = styled.div`
    position: relative;

`

const StyledLogoutButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    cursor: pointer; 
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    text-transform: capitalize;
  /* display: inline-block; */
`

const StyledLogoutImage = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
`

const StyledLogoutDropdown = styled.div`
    position: absolute;
    top:45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    border-radius: var(--border-radius);
    background: var(--primary-500);
    ${({ $showLogout }) => $showLogout ? `
        visibility: visible;
    ` : 
    `visibility: hidden;`}
`

const StyledLogoutDropdownButton = styled.button`
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
`

export {
    StyledLogoutWrapper,
    StyledLogoutButton,
    StyledLogoutDropdown,
    StyledLogoutImage,
    StyledLogoutDropdownButton
}