import React, { Component } from 'react'; // Importing React and Component from 'react' module
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Importing Formik, Form, Field, and ErrorMessage components from 'formik' module

class UserForm extends Component {
  constructor(props){
    super(props); // Calling the constructor of the parent class (Component) with props
  }
  
  render(){
    return(
      <div>
        <h1>Any place in your app!</h1>
        {/* Formik component for handling form values, validation, and submission */}
        <Formik
          initialValues={{ email: '', password: '' }} // Initial values for form fields
          validate={values => { // Validation function for form fields
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            else if (values.email.length < 10) {
              errors.email = 'Email address too short';
            } 
            
            if (!values.password) {
              errors.password = 'Required';
            }
            else if (values.password.length < 8) {
              errors.password = 'Password too short';
            }                            
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => { // Submission handler
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2)); // Displaying form values on submit
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" /> {/* Input field for email */}
              <span style={{ color:"red", fontWeight: "bold" }}>
                <ErrorMessage name="email" component="div" /> {/* Displaying error message for email */}
              </span>                               
              <Field type="password" name="password" /> {/* Input field for password */}
              <span style={{ color:"red", fontWeight: "bold" }}>
                <ErrorMessage name="password" component="div" /> {/* Displaying error message for password */}
              </span>                
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>      
    )    
  }
}

export default UserForm; // Exporting UserForm as the default export
