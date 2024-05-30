import {Outlet} from 'react-router-dom'
import {
    StyledDashboardContainer,
    StyledMainDashboard, 
    StyledNavbarContainer,
    StyledOutletPage
} from './styles'
import {
    SmallSidebar, 
    BigSidebar,
    NavBar
} from '../../components'


const DashboardLayout = () => {

    return (
        <StyledDashboardContainer> 
        <StyledMainDashboard >
            <SmallSidebar/>
            <BigSidebar/>
            <StyledNavbarContainer>
                <NavBar/>
                <StyledOutletPage>
                    <Outlet/>
                </StyledOutletPage>
            </StyledNavbarContainer>
        </StyledMainDashboard>
        </StyledDashboardContainer>
    )
  }

  
  export default DashboardLayout