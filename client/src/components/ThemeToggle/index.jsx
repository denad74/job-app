import { useDashboard } from '../../context/DashboardContext/useDashboard';
import { StyledThemeToggleWrapper, StyledToggleMoonIcon, StyledToggleSunIcon } from './styles';

const ThemeToggle = () => {
    const {isDarkTheme, toggleDarkTheme} = useDashboard();
  return (
    <StyledThemeToggleWrapper onClick={toggleDarkTheme}>
        {isDarkTheme ? <StyledToggleSunIcon/> :<StyledToggleMoonIcon/>}
    </StyledThemeToggleWrapper>
  )
}

export default ThemeToggle;
