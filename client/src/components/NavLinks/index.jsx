import links from '../../utils/links';
import { useDashboard } from '../../context/DashboardContext/useDashboard';
import { StyledSmallSidebarIcon, StyledSmallSidebarLinks, StyledSmallSidebarNavLink } from './styles';
// eslint-disable-next-line react/prop-types
const NavLinks = ({isBigSidebar}) => {
  const {toggleSidebar } = useDashboard()
  return (
    <StyledSmallSidebarLinks>
      {links.map((link)=> {
        const {id, text, path, icon} = link;
        return <StyledSmallSidebarNavLink 
          to={path} 
          key={id} 
          onClick={isBigSidebar ? null : toggleSidebar} 
          end>
          {/* icon */}
          <StyledSmallSidebarIcon>
            {icon}
          </StyledSmallSidebarIcon>
          {text}
        </StyledSmallSidebarNavLink>
      })}
    </StyledSmallSidebarLinks>
  )
}

export default NavLinks
