import { useState } from 'react';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useDashboard } from '../../context/DashboardContext/useDashboard';
import { StyledLogoutButton, StyledLogoutDropdown, StyledLogoutWrapper, StyledLogoutDropdownButton } from './styles';

const Logout = () => {
    const [ showLogout, setShowLogout] = useState(false);
    const {user, logoutUser} = useDashboard()
  return (
    <StyledLogoutWrapper>
      <StyledLogoutButton onClick={() => {setShowLogout(!showLogout)}}>
        <FaUserCircle />
        {user?.name}
        <FaCaretDown/>
        </StyledLogoutButton>
        <StyledLogoutDropdown $showLogout={showLogout}>
            <StyledLogoutDropdownButton type='button' onClick={logoutUser}>
                logout
            </StyledLogoutDropdownButton>
        </StyledLogoutDropdown>
    </StyledLogoutWrapper>
  )
}

export default Logout
