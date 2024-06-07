/* eslint-disable react/prop-types */
import { createContext } from "react";


const AllJobsContext = createContext();
const Provider = AllJobsContext.Provider;

const AllJobsContextProvider = ({ children, data }) => {
  return <Provider value={{data}}>{children}</Provider>;
};

export { AllJobsContext, AllJobsContextProvider };