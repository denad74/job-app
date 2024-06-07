import {Outlet, redirect, useLoaderData} from 'react-router-dom'
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
} from '../../components';
import customFetch from '../../utils/customFetch';
import { useDashboard } from '../../context/DashboardContext/useDashboard';
import { useEffect } from 'react';

export const loader = async () => {
    try {
       const { data } = await customFetch.get('/users/current-user');
       return data
    } catch (error) {
        return redirect('/');
    }
}


const DashboardLayout = () => {
    const {setUser} = useDashboard()
    const {user} = useLoaderData();
    useEffect(()=> {
        setUser(user);
    }, [setUser, user])
    return (
        <StyledDashboardContainer> 
        <StyledMainDashboard >
            <SmallSidebar/>
            <BigSidebar/>
            <StyledNavbarContainer>
                <NavBar/>
                <StyledOutletPage>
                    <Outlet context={{user}}/>
                    {/* <Outlet /> */}
                </StyledOutletPage>
            </StyledNavbarContainer>
        </StyledMainDashboard>
        </StyledDashboardContainer>
    )
  }

  
  export default DashboardLayout