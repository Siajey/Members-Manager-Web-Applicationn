import * as Yup from 'yup'

export const contactSchema = Yup.object().shape({
  fullname: Yup.string().required(
    'this field is required please put in valid data'
  ),
  photo: Yup.string()
    .url('enter an valid url')
    .required('this field is required '),
  mobile: Yup.number().required(
    'this field is required and please put in valid phone-number'
  ),
  email: Yup.string()
    .email('not a valid email address')
    .required('please put in a valid email address'),
  job: Yup.string().required('this field is required'),
  group: Yup.string().required('this field is required'),
})
