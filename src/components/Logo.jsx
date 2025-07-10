import React from 'react'
import logo from "../assets/logo.svg"

const Logo = ({ className = "" }) => {
  return (
     <img 
      src={logo} 
      alt="Blog App" 
      className={`w-32 h-16 ${className}`}
    />
  )
}
export default Logo;