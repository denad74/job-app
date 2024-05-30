import main from '../../assets/images/main.svg';
import { Logo }  from '../../components';
import { 
  StyledNav,
  StyledPage,
  StyledHeader,
  StyledText, 
  StyledButtonLink, 
  StyledRegisterLink, 
  StyledImage 
} from './styles';

const Landing = () => {
  return (
    <div>
      <StyledNav>
        <Logo/>
      </StyledNav>
      <StyledPage>
        <div className="info">
          <StyledHeader>Job <span>tracking</span> app</StyledHeader>
          <StyledText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam numquam at placeat magni officia omnis, quos ex excepturi hic, aliquid pariatur voluptates, repudiandae debitis cupiditate? Ad est accusantium alias.</StyledText>
          <StyledRegisterLink to="/register" className='btn'>Register</StyledRegisterLink>
          <StyledButtonLink to="/register" className='btn'>Login /Demo User</StyledButtonLink>
        </div>
        <StyledImage src={main} alt="Job main pic" className='img'/>
      </StyledPage>
    </div>
    
  )
}


export default Landing