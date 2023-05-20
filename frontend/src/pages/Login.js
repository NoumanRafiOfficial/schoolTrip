import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <>
      <div className='head'>
        <h1>Log In:</h1>
      </div>

      <div className='container bg-black pt-4'>

        <form className="login" onSubmit={handleSubmit}
          style={{ width: '50%', margin: 'auto', fontSize: '150%', color: '#ffc107' }}>

          <label className='mt-5'>Email address:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{ fontSize: '80%' }} className='form-control'
          />
          <label className='mt-3'>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={{ fontSize: '80%' }} className='form-control'
          />

          <button disabled={isLoading}
            className='btn btn-outline-warning mt-5' style={{ width: '50%' }}>
            Log in</button>
          {error && <div className="error text-center">{error}</div>}
        </form>
      </div>
    </>
  )
}

export default Login