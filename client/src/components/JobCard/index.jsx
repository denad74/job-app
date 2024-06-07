/* eslint-disable react/prop-types */
import day from 'dayjs';
// import advancedFormats from 'dayjs/plugin/advancedFormat';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import JobInfo from '../JobInfo';
import { 
  StyledJobCardWrapper, 
  StyledJobCardTitle, 
  StyledJobCardHeader, 
  StyledJobCardIcon, 
  StyledJobCardInfo,
  StyledJobCardText, 
  StyledJobCardContentContainer, 
  StyledJobCardContent,
  StyledJobCardStatus,
  StyledJobCardFooter,
  StyledJobCardLink,
  StyledJobCardForm,
  StyledJobCardButton 
} from "./styles";

const JobCard = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus
}) => {
  const date = day(createdAt).format('MMM DD, YYYY')
  return (
    <StyledJobCardWrapper>
      <StyledJobCardHeader>
        <StyledJobCardIcon>
          {company.charAt(0)}
        </StyledJobCardIcon>
        <StyledJobCardInfo>
          <StyledJobCardTitle>
            {position}
          </StyledJobCardTitle>
          <StyledJobCardText>
            {company}
          </StyledJobCardText>
        </StyledJobCardInfo>
      </StyledJobCardHeader>
      <StyledJobCardContentContainer>
      <StyledJobCardContent>
        <JobInfo icon={<FaLocationArrow/>} text={jobLocation} />
        <JobInfo icon={<FaCalendarAlt/>} text={date} />
        <JobInfo icon={<FaBriefcase/>} text={jobType} />
        <StyledJobCardStatus $jobStatus={jobStatus}>
          {jobStatus}
        </StyledJobCardStatus>
      </StyledJobCardContent>
      <StyledJobCardFooter>
        <StyledJobCardLink to={`../edit-job/${_id}`}>
          Edit
        </StyledJobCardLink>
        <StyledJobCardForm method='post' action={`../delete-job/${_id}`}>
          <StyledJobCardButton type='submit'>
            Delete
          </StyledJobCardButton>
        </StyledJobCardForm>
      </StyledJobCardFooter>
      </StyledJobCardContentContainer>
    </StyledJobCardWrapper>
  )
}

export default JobCard;
