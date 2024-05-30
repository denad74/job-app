import { useDashboard } from "../../context/DashboardContext/useDashboard";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import { ShowSidebarContent, StyledBigSidebarContainer, StyledBigSidebarHeader, StyledBigSidebarWrapper } from "./styles";

const BigSidebar = () => {
  const {showSidebar} = useDashboard()
  return (
    <StyledBigSidebarWrapper>
        <StyledBigSidebarContainer $showSidebar={showSidebar}>
          <ShowSidebarContent>
            <StyledBigSidebarHeader>
              <Logo />
            </StyledBigSidebarHeader>
            <NavLinks isBigSidebar/>
          </ShowSidebarContent>
        </StyledBigSidebarContainer>
    </StyledBigSidebarWrapper>
  )
}

export default BigSidebar;