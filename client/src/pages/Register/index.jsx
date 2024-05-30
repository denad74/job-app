import { FormRow, Logo } from "../../components"
import { 
  StyledRegisterContainer, 
  StyledLogoImg,
  StyledForm,
  StyledHeadingExtraSmall, 
  StyledRegisterText,
  StyledButton,
  StyledMemberButton
} from "./styles"

const Register = () => {
  return (
    <StyledRegisterContainer>
        <StyledForm>
          <StyledLogoImg>
            <Logo/>
          </StyledLogoImg>
          <StyledHeadingExtraSmall>Register</StyledHeadingExtraSmall>
          <FormRow type="text" name="name" defaultValue="deno" />
          <FormRow type="text" name="lastName" labelText="last name" defaultValue="ram" />
          <FormRow type="text" name="location" defaultValue="sarajevo" />
          <FormRow type="email" name="email" defaultValue="deno@deno.com" />
          <FormRow type="password" name="password" defaultValue="deno1234" />
          <StyledButton type="submit">
            submit
          </StyledButton>
            <StyledRegisterText>Already a member?
            <StyledMemberButton to='/login' >Login</StyledMemberButton>
            </StyledRegisterText>
        </StyledForm>
    </StyledRegisterContainer>
  )
}

export default Register