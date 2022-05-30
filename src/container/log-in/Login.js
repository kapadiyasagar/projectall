import React, { useState } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';

function Login(props) {

  const [User, setUserType] = useState('login')
  const [Reset, setReset] = useState(false)

  const login = {
    email: yup.string().email("please enter valid email").required("please enter email"),
    password: yup.string().required("please enter Password")
  }
  const Signup = {
    name: yup.string().required("please enter name"),
    email: yup.string().email("please enter valid email").required("please enter email"),
    password: yup.string().required("please enter Password")
  }
  const reset = {
    email: yup.string().required('enter  email').email('enter valid email')

  }

  let schema, initVal;

  if (User === "login") {

    schema = yup.object().shape(login);
    initVal = {
      email: '',
      password: ''
    }
  }
  else if (User === "Signup") {
    schema = yup.object().shape(Signup);
    initVal = {
      name: '',
      email: '',
      password: ''
    }
  }
  else if (User === "reset") {
    schema = yup.object().shape(reset);
    initVal = {
      email: ''

    }
  }




  const formik = useFormik({
    initialValues: initVal,
    validationSchema: schema,
    onSubmit: (values) => {
      if (User == "login") {
        login(values)
      }
      else if (User == "Signup") {
        Signup(values)
      } else if (User == "reset") {
        reset(values)
      }
    }
  })

  console.log(formik.errors.email);

  return (

    <section id="appointment" className="appointment">
      <div className="container">
        {
          User === 'reset' ?
            <div className="section-title">
              <h2>Forgot Password</h2>
            </div>
            :
            User === 'login' ?
              <div className="section-title">
                <h2>Login</h2>
              </div>
              : <div className="section-title">
                <h2>Signup</h2>
              </div>
        }

        <Formik value={formik}>
          <Form onSubmit={formik.handleSubmit}>


            {User === "Signup" ?
              <div className="row justify-content-center">
                <div className="col-md-4 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                    onChange={formik.handleChange}
                  />
                  {
                    formik.errors.name ? <p>{formik.errors.name}</p> : null
                  }
                  <div className="validate" />
                </div>
              </div>
              : null
            }

        
               
  

            <div className="row justify-content-center">
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                  onChange={formik.handleChange}
                  value={formik.handleChange}
                />

                {
                  formik.errors.email ? <p>{formik.errors.email}</p> : null
                }
                <div className="validate" />
              </div>
            </div>

            {User === "reset" ?null
      :         <div className="row justify-content-center">
      <div className="col-md-4 form-group mt-3 mt-md-0">
        <input type="password" className="form-control" name="password" id="password" placeholder="Your password"
          onChange={formik.handleChange} />
        <div className="validate" />

        {
          formik.errors.password ? <p>{formik.errors.password}</p> : null
        }
      </div>

    </div>
            }
         
            <div className='row'>
              <div className='d-flex  justify-content-center'>
                <div class="text-center login m-3"><button type="submit" onClick={() => setUserType('login')}>Login</button></div>
                <div class="text-center signup m-3"><button type="submit" onClick={() => setUserType('Signup')}>Signup</button></div>
                <div class="text-center signup m-3"><button type="submit" onClick={() => setUserType('reset')}>forgot</button></div>
              </div>

            </div>
          </Form>
        </Formik>
      </div>
    </section>


  );
}

export default Login;