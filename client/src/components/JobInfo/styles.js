import styled from 'styled-components';

const StyledJobInfoWrapper = styled.div`
    display: flex;
    align-items: center;
`
const StyledJobInfoIcon = styled.span`
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
        color: var(--text-secondary-color);
    }
`
const StyledJobInfoText = styled.span`
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
`

export {
    StyledJobInfoWrapper,
    StyledJobInfoIcon,
    StyledJobInfoText

}