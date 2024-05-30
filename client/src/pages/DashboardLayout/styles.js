import styled from "styled-components";
import {devices} from '../../constants/breakpoints'

const StyledDashboardContainer = styled.section``//Wrapper

const StyledMainDashboard = styled.main`//dashboard
    display: grid;
    grid-template-columns: 1fr;
    @media only screen and (${devices.md}) {
        grid-template-columns: auto 1fr;
    }`

const StyledNavbarContainer = styled.div`//prazan div
    
`

const StyledOutletPage = styled.div`
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
    @media only screen and (${devices.md}) {
        width: 90%;
    }
`


export {
    StyledDashboardContainer,
    StyledMainDashboard,
    StyledNavbarContainer,
    StyledOutletPage
}