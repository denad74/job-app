import { createContext, useEffect, useState } from 'react';
import customFetch from '../../utils/customFetch';
import { toast } from 'react-toastify';
const DashboardContext = createContext();
const Provider = DashboardContext.Provider;

const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
  };

// eslint-disable-next-line react/prop-types
const DashboardContextProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme);
      }, [isDarkTheme]);

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle('dark-theme', newDarkTheme);
        localStorage.setItem('dark-theme', newDarkTheme)
    };
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const logoutUser = async ()  => {
      await customFetch.get('/auth/logout')
      toast.success('Logging out...')
    }
  return <Provider value={{ 
    user,
    setUser, 
    showSidebar, 
    isDarkTheme, 
    toggleDarkTheme, 
    toggleSidebar, 
    logoutUser}}>{children}</Provider>;
};

export { DashboardContext, DashboardContextProvider };