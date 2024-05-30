import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import styled from 'styled-components';

const StyledThemeToggleWrapper = styled.button`
    background: transparent;
    border-color: transparent;
    width: 3.5rem;
    height: 2rem;
    display: grid;
    place-items: center;
    cursor: pointer;
`
const StyledToggleSunIcon = styled(BsFillSunFill)`
    font-size: 1.15rem;
    color: var(--text-color);
`

const StyledToggleMoonIcon = styled(BsFillMoonFill)`
    font-size: 1.15rem;
    color: var(-text-color);
`
export {
    StyledThemeToggleWrapper,
    StyledToggleSunIcon,
    StyledToggleMoonIcon
}