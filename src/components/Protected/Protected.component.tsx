import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const ProtectedRoute = (props: any) => {
  const navigate = useNavigate()
  const { Component } = props
  const userData = JSON.parse(localStorage.getItem('user')!)

  useEffect(() => {
    if (!userData) {
      navigate('')
    }
  }, [])
  return (
    <>
      <Component />
    </>
  )
}
export default ProtectedRoute
