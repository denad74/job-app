import { useState } from 'react';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useDashboard } from '../../context/DashboardContext/useDashboard';
import { StyledLogoutButton, StyledLogoutDropdown, StyledLogoutWrapper, StyledLogoutDropdownButton } from './styles';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [ showLogout, setShowLogout] = useState(false);
    const {user, logoutUser} = useDashboard();
    const navigate = useNavigate()

    const loggingOutHandler = () => {
      logoutUser();
      navigate('/');
    }
  return (
    <StyledLogoutWrapper>
      <StyledLogoutButton onClick={() => {setShowLogout(!showLogout)}}>
        <FaUserCircle />
        {user?.name}
        <FaCaretDown/>
        </StyledLogoutButton>
        <StyledLogoutDropdown $showLogout={showLogout}>
            <StyledLogoutDropdownButton type='button' onClick={loggingOutHandler}>
                logout
            </StyledLogoutDropdownButton>
        </StyledLogoutDropdown>
    </StyledLogoutWrapper>
  )
}

export default Logout
