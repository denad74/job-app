import { redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import { FormRow, Logo } from "../../components"
import customFetch from "../../utils/customFetch";
import { 
  StyledForm, 
  StyledHeadingExtraSmall, 
  StyledLoginContainer,
  StyledLoginText,
  StyledLogoImg,
  StyledButton,
  StyledMemberButton
} from "./styles";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <StyledLoginContainer>
        <StyledForm method="post">
          <StyledLogoImg>
            <Logo/>
          </StyledLogoImg>
          <StyledHeadingExtraSmall>login</StyledHeadingExtraSmall>
          <FormRow type="email" name="email" defaultValue="deno@deno.com"/>
          <FormRow type="password" name="password" defaultValue="deno1234"/>
          <StyledButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'submitting' :'submit'}
          </StyledButton>
          <StyledButton type="button">
            explore the app
          </StyledButton>
          <StyledLoginText>Not a member yet?
            <StyledMemberButton to='/register'>Register</StyledMemberButton>
            </StyledLoginText>
        </StyledForm>
    </StyledLoginContainer>
  )
}

export default Login