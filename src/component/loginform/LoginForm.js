import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomerService from '../../api/customerService'
import Input from '../input/Input'
import './LoginForm.css'
import Swal from 'sweetalert2'

const LoginForm = ({setUsername, setAuthorities}) => {
  let navigate = useNavigate();
const initialValues = {email:'', password:''}
const [formValues, setFormValues] = useState(initialValues);
const [formError, setFormError] = useState({})
const [isSubmitted, setIsSubmitted] = useState(false)


const handleChange=(event)=>{
  console.log(event.target);
  const{name,value}=event.target;
  setFormValues({...formValues,[name]:value})
}


function parseJwt(token){
  if(!token){return}
  const base64Url = token.split('.')[1];
  const base64    = base64Url.replace('-','+').replace('_','/');
  return JSON.parse(window.atob(base64))
}

const checkUser = (data) => {
  localStorage.setItem("email", data.email);
  CustomerService.login(data)
    .then((response) => {
      let token = response.data;
      let userData = parseJwt(token);
      console.log("this is a token " + userData);
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("username", userData.sub);
      localStorage.setItem("authorities", userData.role[0].authority);
      ;
      Swal.fire("SweetAlert2 is working!")
      setUsername(userData.sub);
      setAuthorities(userData.role[0].authority)
      navigate('/')
    })
    .catch((e) => {
      console.log(e);
    });
};

const handleSubmit = (e)=>{
  e.preventDefault();
  setFormError(validateForm(formValues));
  setIsSubmitted(true)
  if(Object.keys(formError).length === 0 && isSubmitted){
    checkUser(formValues)
  };

}
const validateForm = (formValues)=>{
  const errors={}
  if(!formValues.email) errors.email = 'Email is required';
  if(!formValues.password) errors.password = 'Password is required'
  return errors;
}


  return (
    <div className='login-baselayer'>
         {/* <h1>Your Gateway to Cinematic<span class="cinematic-word">Insight</span></h1> */}
        <div className='login-background'>
          <div className='login-detail'>
            <div className='movie-posters-container'>
                <img src={`${process.env.PUBLIC_URL}/postersalot.jpg`}></img>
            </div>
            </div>
            
            <div className='input-container'>
            <h2>Good to see you again 😉</h2>
          
            <Input 
            name="email"
            value={formValues.email} 
            type={'text'}
            placeholder={'john@email.com'}
            onChange={handleChange}/>
            <b style={{color:'red'}}>{formError.email}</b>
            <Input 
            name="password"
            value={formValues.password} 
            type={'password'} 
            placeholder={'password'}
            onChange={handleChange}/>
            <b style={{color:'red'}}>{formError.password}</b>
            <button onClick={handleSubmit} className='login-button-wrapper'>Login</button>
            <p className='signup-wrapper'>Don't have account? <span className='signup-text'>Sign up</span></p>
            </div>
        
            
        </div>
         
    </div>
  )
}

export default LoginForm
