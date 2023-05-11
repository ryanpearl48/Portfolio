import React from 'react';
import { useFormik } from 'formik';

// Add form here, results to supabase?

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
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <input
        id="idea"
        name='idea'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.idea}
        />
       <button type="submit">Submit</button>
     </form>
  )
}

export default FutureProjects
