import { useAllJobs } from "../../context/AllJobsContext/useAllJobsContext";
import JobCard from "../JobCard";
import { StyledJobsWrapper, StyledJobsTitle, StyledJobsContainer } from "./styles";

const JobsContainer = () => {
  const {data} = useAllJobs();
  const {jobs} = data;
  if(jobs.length === 0){
    return(
      <StyledJobsWrapper>
        <StyledJobsTitle>
          No jobs to display...
        </StyledJobsTitle>
      </StyledJobsWrapper>
    );
  }
  return (
    <StyledJobsWrapper>
      <StyledJobsContainer>
        {jobs.map((job) => <JobCard key={job._id} {...job}/>
        )}
      </StyledJobsContainer>
    </StyledJobsWrapper>
  )
}

export default JobsContainer;
