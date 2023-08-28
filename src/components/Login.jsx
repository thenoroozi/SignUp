import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validation } from './validation';
import { notify } from './toast';
import styles from './Signup.module.css'

const Login = () => {
   const [data, setData] = useState({
      email: "",
      password: "",
   })
   const [errors, setErrors] = useState({})
   const [touched, setTouched] = useState({})

   const focusHandler = (event) => {
      setTouched({ ...touched, [event.target.name]: true })
   }

   useEffect(() => {
      setErrors(validation(data,"login"))
   }, [data, touched])

   const changeHandler = event => {
         setData({ ...data, [event.target.name]: event.target.value })
   }

   const submitHandler = (event) => {
      event.preventDefault();
      notify()
      if (!Object.keys(errors).length) {
         notify("You logged in successfully", "success")
      } else {
         notify("Invalid data!", "error")
         setTouched({
            email: true,
            password: true,
         })
      }
   }


   return (
      <div className={styles.container}>
         <form onSubmit={submitHandler} className={styles.formContainer}>
            <h2 className={styles.header}>Sign Up</h2>
            <div className={styles.formField}>
               <label>Email</label>
               <input
                  className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                  type="text"
                  name='email'
                  value={data.email}
                  onChange={changeHandler}
                  onFocus={focusHandler} />
               {errors.email && touched.email && <span>{errors.email}</span>}
            </div>
            <div className={styles.formField}>
               <label>Password</label>
               <input
                  className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                  type="password"
                  name='password'
                  value={data.password}
                  onChange={changeHandler}
                  onFocus={focusHandler} />
               {errors.password && touched.password && <span>{errors.password}</span>}
            </div>
            <div className={styles.formButtons}>
               <Link to='/signup' >Sign Up</Link>
               <button type='submit'>Login</button>
            </div>
         </form>
         <ToastContainer />
      </div>
   );
};

export default Login;