import styled from "styled-components";
import { devices } from "../../constants/breakpoints";

const StyledJobsWrapper = styled.div`
    margin-top:4rem;
`
const StyledJobsTitle = styled.h2`
    text-transform: none;
`
const StyledJobsSubtitle = styled.h5`
    font-weight: 700;
    margin-bottom: 1.5rem;
`
const StyledJobsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    @media only screen and (${devices.lg}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
`

export {
    StyledJobsWrapper,
    StyledJobsTitle,
    StyledJobsContainer,
    StyledJobsSubtitle
}