import React from 'react';
import { useFormik } from 'formik';
import { Formik, Field, Form, FormikHelpers } from 'formik';

// Add form here, results to supabase?

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  idea: string;
}

const FutureProjects = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      idea: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })
  return (
    <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      idea: '',
    }}
    onSubmit={(
      values: Values,
      { setSubmitting }: FormikHelpers<Values>
    ) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
  >
    <Form>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="John" />

      <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" />

      <label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="john@acme.com"
        type="email"
      />

      <label htmlFor='idea'>Idea</label>
      <Field id='idea' name='idea' placeholder='Write idea here' />

      <button type="submit">Submit</button>
    </Form>
  </Formik>
  )
}

export default FutureProjects
