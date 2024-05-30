import {  useRouteError } from "react-router-dom"
import img from '../../assets/images/not-found.svg';
import {
    StyledErrorContainer,
    StyledHeading,
    StyledErrorImg,
    StyledErrorText,
    StyledErrorLink
} from './styles'
const Error = () => {
  const error = useRouteError();
  if(error.status ===404){
    return (
        <StyledErrorContainer>
            <div>
            <StyledErrorImg src={img} alt="not found" />
            <StyledHeading>Page Not found!</StyledHeading>
            <StyledErrorText>We can not seem to find the page you are looking for</StyledErrorText>
            <StyledErrorLink to='/dashboard'>Back To Home</StyledErrorLink>
            </div>
        </StyledErrorContainer>
      )
  }
  return (
    <StyledErrorContainer>
      <StyledHeading>Something went wrong!</StyledHeading>
    </StyledErrorContainer>
  )
}

export default Error