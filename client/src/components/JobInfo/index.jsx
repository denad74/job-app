/* eslint-disable react/prop-types */
import { StyledJobInfoWrapper, StyledJobInfoIcon, StyledJobInfoText } from "./styles";

const JobInfo = ({icon, text}) => {
  return (
    <StyledJobInfoWrapper>
      <StyledJobInfoIcon>
        {icon}
      </StyledJobInfoIcon>
      <StyledJobInfoText>
        {text}
      </StyledJobInfoText>
    </StyledJobInfoWrapper>
  )
}

export default JobInfo;
