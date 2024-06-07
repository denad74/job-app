import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { HomeLayout, Register, Login, DashboardLayout, Landing, Error, Admin, AddJob, Stats, AllJobs, Profile, EditJob} from './pages';
import { DashboardContextProvider } from "./context/DashboardContext";

import { action as registerAction} from './pages/Register';
import { action as loginAction} from './pages/Login';
import { action as addJob } from './pages/AddJob';
import { action as editJob } from './pages/EditJob';
import { loader as editJobLoader } from './pages/EditJob';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as allJobsLoader } from './pages/AllJobs';
import { action as deleteJob } from './pages/DeleteJob';





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
      element: <Register/>,
      action: registerAction,
      },
      {
      path: 'login',
      element: <Login/>,
      action: loginAction,
      },
      {
      path: 'dashboard',
      element: <DashboardLayout/>,
      loader: dashboardLoader,
      children:[
        {
          index:true,
          element: <AddJob />,
          action: addJob,
        },
        {
          path: 'stats',
          element: <Stats />
        },
        {
          path: 'all-jobs',
          element: <AllJobs />,
          loader: allJobsLoader
        },
        {
          path: 'profile',
          element: <Profile />
        },
        {
          path: 'admin',
          element: <Admin />
        },
        { 
          path: 'edit-job/:id',
          element: <EditJob/>,
          loader: editJobLoader,
          action: editJob
        },
        {
          path: 'delete-job/:id',
          action: deleteJob
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
