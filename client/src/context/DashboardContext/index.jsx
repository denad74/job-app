import { createContext, useEffect, useState } from 'react';
import { user } from '../../Data';
const DashboardContext = createContext({user, });
const Provider = DashboardContext.Provider;

const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
  };

// eslint-disable-next-line react/prop-types
const DashboardContextProvider = ({ children }) => {
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
        console.log('Logout user');
    }
  return <Provider value={{ 
    user, 
    showSidebar, 
    isDarkTheme, 
    toggleDarkTheme, 
    toggleSidebar, 
    logoutUser}}>{children}</Provider>;
};

export { DashboardContext, DashboardContextProvider };