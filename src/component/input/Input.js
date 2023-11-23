import React from 'react'
import './Input.css'

const Input = ({autoComplete,id,name, type, placeholder,onChange,value,pattern}) => {
  return (
    <div>
      <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className='input-wrapper'
      onChange={onChange}
      value={value}
      autoComplete={autoComplete}
      pattern={pattern}/>  
      
      
    </div>
  )
}

export default Input
