import { redirect, useNavigation } from "react-router-dom"
import { toast } from 'react-toastify';
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
import customFetch from "../../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data)
    toast.success('Registration successful')
    return redirect('/login');
  } catch (error) {
      toast.error(error?.response?.data?.msg)
    return error;
  }
}

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <StyledRegisterContainer>
        <StyledForm method="post">
          <StyledLogoImg>
            <Logo/>
          </StyledLogoImg>
          <StyledHeadingExtraSmall>Register</StyledHeadingExtraSmall>
          <FormRow type="text" name="name" defaultValue="deno" />
          <FormRow type="text" name="lastName" labelText="last name" defaultValue="ram" />
          <FormRow type="text" name="location" defaultValue="sarajevo" />
          <FormRow type="email" name="email" defaultValue="deno@deno.com" />
          <FormRow type="password" name="password" defaultValue="deno1234" />
          <StyledButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "submitting" : 'submit'}
          </StyledButton>
            <StyledRegisterText>Already a member?
            <StyledMemberButton to='/login' >Login</StyledMemberButton>
            </StyledRegisterText>
        </StyledForm>
    </StyledRegisterContainer>
  )
}

export default Register