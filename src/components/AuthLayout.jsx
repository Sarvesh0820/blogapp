import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    console.log('AuthLayout - authStatus:', authStatus, 'authentication:', authentication) // Add this

    useEffect(() => {
        console.log('AuthLayout useEffect - authStatus:', authStatus, 'authentication:', authentication) // Add this
        
        if (authentication && !authStatus) {
            console.log('Redirecting to login') // Add this
            navigate("/login")
        } 
        else if (!authentication && authStatus) {
            console.log('Redirecting to home') // Add this
            navigate("/")
        }
        else {
            console.log('No redirect needed, should render children') // Add this
        }
        setLoader(false)

    },[authStatus, navigate, authentication])
    
    console.log('AuthLayout render - loader:', loader, 'will render children:', !loader) // Add this
    
    return loader ? <h1>Loading...</h1> : <>{children}</>
}