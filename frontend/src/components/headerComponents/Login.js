import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const navigate = useNavigate()

  const handleClick = () => {
    logout()
    navigate('/')
    window.scrollTo({ top: 0 })
  }

  // const navigate = useNavigate()
  return (
    <div className=''>
      <nav>
        {user && (
          <div>
            <button style={{ float: 'right' }} className='btn btn-outline-warning mt-4' onClick={handleClick}>Log out</button>
            <Link style={{ float: 'right', fontSize: '150%' }} className='btn text-warning mt-3'>{user.email}</Link>
          </div>
        )}
        {!user && (
          <div className='mt-4' >
            <Link style={{ float: 'right' }} className='btn btn-outline-warning' to="/login">Login</Link>
            <Link style={{ float: 'right' }} className='btn btn-outline-warning me-4' to="/signup">Signup</Link>
          </div>
        )}
      </nav>
      {/* <button
        onClick={() => { navigate('/student-reg') }}
        class="btn btn-outline-dark mt-4">
        Student Reg.</button>

      <button
        onClick={() => { navigate('/driver-reg') }}
        class="btn btn-outline-dark mt-4">
        Driver Reg.</button> */}
    </div>
  )
}

export default Login