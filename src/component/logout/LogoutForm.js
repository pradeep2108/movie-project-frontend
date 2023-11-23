import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomerService from '../../api/customerService'

const LogoutForm = ({setUsername, setAuthorities}) => {

    let navigate = useNavigate();

    useEffect(()=>{
        CustomerService.logout().then((response)=>{
            localStorage.removeItem('userName');
            localStorage.removeItem('email');
            localStorage.removeItem('authorities')
            localStorage.removeItem('token');
            setUsername("");
        setAuthorities("");
        navigate('/')
        
        }).catch((e)=>{
            console.error(e)
        })

        
        
    },[])
    
  return (
    <div>     
    </div>
  )
}

export default LogoutForm
