import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/start-page.css'
import { useNavigate } from 'react-router-dom'

const StartPage = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required')
    }),
    onSubmit: (values) => {
      console.log('User Info:', values)
      navigate('/quiz') // yönlendirme
    }
  })

  return (
    <div className="start-page">
      <h1 className="start-title">Welcome to SpeedQuiz</h1>
      <form onSubmit={formik.handleSubmit} className="start-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className="form-input"
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <p className="form-error">{formik.errors.firstName}</p>
        )}

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          className="form-input"
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <p className="form-error">{formik.errors.lastName}</p>
        )}

        <button type="submit" className="start-button">Start Test</button>
      </form>
    </div>
  )
}

export default StartPage
