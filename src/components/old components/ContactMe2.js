import { Field, Form, Formik, ErrorMessage } from "formik"


export const ContactMe = () => {

    return (
        <Formik 
            initialValues={{ 
                name: 'John Doe', 
                email: '' 
            }}
            validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            } else if (values.name === 'John Doe' || !values.name) {
                errors.name = 'Required'
            }
            return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
                {({ isSubmitting }) => (
                    <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </Form>
                )}
            </Formik>
    )
}


