import * as React from 'react'
import * as Yup from 'yup';
// import * as classnames from 'classnames'
import { withFormik, InjectedFormikProps } from 'formik'

interface InputFeedbackProps {
  error: string;
} 

const InputFeedback = ({ error }: InputFeedbackProps) => (
  error
    ? <div className="input-feedback">{error}</div>
    : null
)

interface TextInputProps {
  type: string,
  id: string,
  label: string,
  error: string,
  value: string,
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void,
  onBlur: (event: React.SyntheticEvent<HTMLInputElement>) => void,
  className?: string,
  placeholder?: string
}

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}: TextInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

interface FormValues {
  firstName: string;
}

const MyForm = ({
  values,
  touched,
  errors,
  dirty,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  isSubmitting,
}: InjectedFormikProps<{}, FormValues>) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        id="firstName"
        label="First Name"
        placeholder="John"
        error={touched.firstName && errors.firstName}
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={isSubmitting}
      >
        Reset
      </button>
      <button
        type="submit"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  )
}

interface UserInfo {
  firstName: string;
}

interface FormProps {
  user: UserInfo;
}

const Form = withFormik<FormProps, FormValues>({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'must be at least 2 chars')
      .required('First name is required.')
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(
      () => {
        alert(values)
        setSubmitting(false)
      },
      1000
    )
  },
  mapPropsToValues: ({ user }) => ({ ...user }),
})(MyForm)

export default () => (
  <div>
    <Form user={{ firstName: ''}} />
  </div>
);