import {
  useNavigation, 
  redirect,useOutletContext 
} from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormRow } from '../../components';

import customFetch from '../../utils/customFetch';
import { JOB_STATUS, JOB_TYPE } from '../../../../utils/constants';
import { 
  StyledAddJobTitle, 
  StyledAddJobWrapper, 
  StyledForm, 
  StyledInputContainer, 
  StyledSubmitButton, 
} from './styles';
import FormRowSelected from '../../components/FormRowSelected';


export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/jobs', data);
    toast.success('Job added successfully');
    return redirect('all-jobs')
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}


const AddJob = () => {
  const { user }  = useOutletContext();
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting';
  return (
    <StyledAddJobWrapper>
      <StyledForm method='post'>
        <StyledAddJobTitle>
          add job
        </StyledAddJobTitle>
        <StyledInputContainer>
          <FormRow type='test' name='position'/>
          <FormRow type='test' name='company'/>
          <FormRow type='test' labelText='job location' name='jobLocation' defaultValue={user.location}/>
          <FormRowSelected 
            labelText='job status' 
            name='jobStatus'
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
            />
          <FormRowSelected 
          labelText='job type' 
          name='jobType'
          defaultValue={JOB_TYPE.FULL_TIME}
          list={Object.values(JOB_TYPE)}
          />
          <StyledSubmitButton type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'submitting' : 'submit'}
          </StyledSubmitButton>
        </StyledInputContainer>
      </StyledForm>
    </StyledAddJobWrapper>
  )
}

export default AddJob