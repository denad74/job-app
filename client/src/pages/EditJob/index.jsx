import { useLoaderData, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { JOB_STATUS, JOB_TYPE } from "../../../../utils/constants";
import { FormRow, FormRowSelected } from "../../components";
import { 
  StyledEditJobWrapper,
  StyledEditJobFormContainer,
  StyledEditJobForm,
  StyledEditJobTitle,
  StyledEditJobButton
} from "./styles";


export const loader = async ({ params }) => {
  try {
    const {data} = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-jobs')
  }
}

export const action = async ({request, params}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success('Job edited successfully');
    return redirect('/dashboard/all-jobs')
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const EditJob = () => {
  const { job } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
;  return (
    <StyledEditJobWrapper>
      {/* form */}
      <StyledEditJobFormContainer method="post">
        {/* form-title */}
        <StyledEditJobTitle>
          edit job
        </StyledEditJobTitle>
        {/* form-centar */}
        <StyledEditJobForm>
          <FormRow 
            type='text' 
            name='position' 
            defaultValue={job.position} 
          />
          <FormRow 
            type='text' 
            name='company' 
            defaultValue={job.company} 
          />
          <FormRow 
            type='text' 
            name='jobLocation' 
            labelText='job location' 
            defaultValue={job.jobLocation} 
          />
          <FormRowSelected 
            name='jobStatus' 
            label='job status' 
            defaultValue={job.jobStatus} 
            list={Object.values(JOB_STATUS)} 
          />
          <FormRowSelected 
            name='jobType' 
            label='job type' 
            defaultValue={job.jobType} 
            list={Object.values(JOB_TYPE)} 
          />
          {/* btn btn-block form-btn */}
          <StyledEditJobButton type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'submitting...' : 'submit'}
          </StyledEditJobButton>
        </StyledEditJobForm>
      </StyledEditJobFormContainer>
    </StyledEditJobWrapper>

  )
}

export default EditJob