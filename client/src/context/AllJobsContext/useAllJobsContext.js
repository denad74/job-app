import { useContext } from 'react';
import { AllJobsContext } from '.';

export const useAllJobs = () => {
  const context = useContext(AllJobsContext);
  if (!context) {
    throw new Error('useAllJobs must be used within a AllJobsProvider');
  }
  return context;
};
