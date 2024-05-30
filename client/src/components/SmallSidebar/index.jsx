import { FaTimes } from 'react-icons/fa';
import { useDashboard } from '../../context/DashboardContext/useDashboard';
import NavLinks from '../NavLinks';
import Logo from '../Logo';
import { StyledSidebarCloseButton, StyledSidebarContent, StyledSmallSidebarContainer, StyledSmallSidebarWrapper } from './styles'


const SmallSidebar = () => {
  const { showSidebar, toggleSidebar} = useDashboard();

  return (
    <StyledSmallSidebarWrapper className='nav'>
      <StyledSmallSidebarContainer className="nava" $showSidebar={showSidebar}>
      <StyledSidebarContent>
        <StyledSidebarCloseButton type = "button" onClick={toggleSidebar}>
          <FaTimes/>
          </StyledSidebarCloseButton>
          <header>
            <Logo />
          </header>
          <NavLinks/>
      </StyledSidebarContent>
      </StyledSmallSidebarContainer>
    </StyledSmallSidebarWrapper>
  )
}

export default SmallSidebar;