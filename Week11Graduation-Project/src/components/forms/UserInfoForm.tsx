import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../styles/components/UserInfoForm.css"; // ✅ CSS bağlantısı

interface UserInfoFormProps {
  onSubmit: (values: {
    firstName: string;
    lastName: string;
    nickname: string;
  }) => void;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("Ad zorunlu!"),
  lastName: Yup.string().required("Soyad zorunlu!"),
  nickname: Yup.string().required("Nickname zorunlu!"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  nickname: "",
};

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="home-form">
        <div className="form-field">
          <label htmlFor="firstName">Ad</label>
          <Field name="firstName" type="text" placeholder="Adınız" />
          <ErrorMessage
            name="firstName"
            component="div"
            className="error-msg"
          />
        </div>

        <div className="form-field">
          <label htmlFor="lastName">Soyad</label>
          <Field name="lastName" type="text" placeholder="Soyadınız" />
          <ErrorMessage name="lastName" component="div" className="error-msg" />
        </div>

        <div className="form-field">
          <label htmlFor="nickname">Nickname</label>
          <Field name="nickname" type="text" placeholder="Nickname" />
          <ErrorMessage name="nickname" component="div" className="error-msg" />
        </div>

        <button type="submit" className="start-button">
          Teste Başla
        </button>
      </Form>
    </Formik>
  );
};

export default UserInfoForm;
