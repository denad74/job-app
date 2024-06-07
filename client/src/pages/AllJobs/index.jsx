import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import { JobsContainer, SearchContainer } from '../../components';
import customFetch from '../../utils/customFetch';
import { AllJobsContextProvider } from '../../context/AllJobsContext';

export const loader = async () => {
  try {
    const {data} = await customFetch.get('/jobs');
    return {data};
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error
  }
}
const AllJobs = () => {
  const {data} = useLoaderData();
  return (
   
    <AllJobsContextProvider data={data}>
      <SearchContainer/>
      <JobsContainer/>
    </AllJobsContextProvider>
   
  )
}

export default AllJobs