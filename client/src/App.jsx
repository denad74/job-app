import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { HomeLayout, Register, Login, DashboardLayout, Landing, Error, Admin, AddJob, Stats, AllJobs, Profile} from './pages'
import { DashboardContextProvider } from "./context/DashboardContext";




const router = createBrowserRouter([
  {
  path: '/',
  element: <HomeLayout/>,
  errorElement: <Error/>,
  children:[
      {
        index:true,
        element: <Landing/>
      },
      {
      path: 'register',
      element: <Register/>
      },
      {
      path: 'login',
      element: <Login/>
      },
      {
      path: 'dashboard',
      element: <DashboardLayout/>,
      children:[
        {
          index:true,
          element: <AddJob />
        },
        {
          path: 'stats',
          element: <Stats />
        },
        {
          path: 'all-jobs',
          element: <AllJobs />
        },
        {
          path: 'profile',
          element: <Profile />
        },
        {
          path: 'admin',
          element: <Admin />
        }
      ]
      },
    ]
  }, 
])
const App = () => {


  return (
    <DashboardContextProvider >
      <RouterProvider router={router}/>
    </DashboardContextProvider>
  )
}

export default App
