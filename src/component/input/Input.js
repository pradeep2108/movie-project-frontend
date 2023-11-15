import React from 'react'
import './Input.css'

const Input = ({name, type, placeholder,onChange,value}) => {
  return (
    <div>
      <input
      name={name}
      type={type}
      placeholder={placeholder}
      className='input-wrapper'
      onChange={onChange}
      value={value}/>  
    </div>
  )
}

export default Input
