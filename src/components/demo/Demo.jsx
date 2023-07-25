import React from 'react'
import { useState,useEffect } from 'react';
import './Demo.css'
import close from './images/close.png'
const Demo = (props) => {
    const [fields, setFields] = useState({
        username: '',
        emailid: '',
        mobileno: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});
    
      useEffect(() => {
        validateForm();
      }, [fields]);
    
      const handleChange = (e) => {
        setFields({
          ...fields,
          [e.target.name]: e.target.value,
        });
      };

      const submitUserRegistrationForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log(fields);
          setFields({
            username: '',
            emailid: '',
            mobileno: '',
            password: '',
          });
          alert('Form submitted');
        }
      };

      const validateForm = () => {
        let errors = {};
        let formIsValid = true;
    
        if (!fields['username']) {
          formIsValid = false;
          errors['username'] = '*Please enter your username.';
        } else if (!fields['username'].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors['username'] = '*Please enter alphabet characters only.';
        }
    
        if (!fields['emailid']) {
          formIsValid = false;
          errors['emailid'] = '*Please enter your email-ID.';
        } else {
          const pattern = new RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
          );
          if (!pattern.test(fields['emailid'])) {
            formIsValid = false;
            errors['emailid'] = '*Please enter valid email-ID.';
          }
        }

        if (!fields['mobileno']) {
            formIsValid = false;
            errors['mobileno'] = '*Please enter your mobile no.';
          } else if (!fields['mobileno'].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors['mobileno'] = '*Please enter valid mobile no.';
          }
      
          if (!fields['password']) {
            formIsValid = false;
            errors['password'] = '*Please enter your password.';
          } else if (
            !fields['password'].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)
          ) {
            formIsValid = false;
            errors['password'] = '*Please enter secure and strong password.';
          }
      
          setErrors(errors);
          return formIsValid;
        };
      
  return (props.trigger) ?(
    <div className='popup'>
        <div className='popup-inner'>
        <div className='MAindiv1'>
      <div id="register" className='MainValitaion1'>
        <h3 className='log-in'>Login</h3>
        <form method="post" name="userRegistrationForm" onSubmit={submitUserRegistrationForm}>
          <label>Name</label>
          <input className='login-page' type="text" name="username" value={fields.username} onChange={handleChange} />
          <div className="errorMsg">{errors.username}</div>
          <label>Email ID:</label>
          <input type="text" name="emailid" value={fields.emailid} onChange={handleChange} />
          <div className="errorMsg">{errors.emailid}</div>
          <label>Mobile No:</label>
          <input type="text" name="mobileno" value={fields.mobileno} onChange={handleChange} />
          <div className="errorMsg">{errors.mobileno}</div>
          <label>Password</label>
          <input type="password" name="password" value={fields.password} onChange={handleChange} />
          <div className="errorMsg">{errors.password}</div>
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    </div>

            <button className='close-btn' onClick={()=> props.setTrigger(false)}> <img src={close} alt="" /> </button>
            {props.children}
            
        </div>

    </div>
  ) : "";
}

export default Demo