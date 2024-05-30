import { useDashboard } from "../../context/DashboardContext/useDashboard";
import Logo from "../Logo";
import Logout from "../Logout";
import ThemeToggle from "../ThemeToggle";
import { StyledLogoContainer, StyledLogoText, StyledNavbarContainer,StyledNavBarWrapper, StyledNavbarButton, StyledToggleButton } from "./styles";
import {FaAlignLeft} from 'react-icons/fa';

const NavBar = () => {
  const {toggleSidebar} = useDashboard();

  return (
    <StyledNavBarWrapper>
      <StyledNavbarContainer>
        <StyledToggleButton  type="button" onClick={toggleSidebar}>
          <FaAlignLeft/>
        </StyledToggleButton>
      <StyledLogoContainer>
        <Logo />
        <StyledLogoText>
          
        </StyledLogoText>
      </StyledLogoContainer>
      <StyledNavbarButton>
        <ThemeToggle />
        <Logout />
      </StyledNavbarButton>
      </StyledNavbarContainer>
    </StyledNavBarWrapper>
  )
}

export default NavBar;