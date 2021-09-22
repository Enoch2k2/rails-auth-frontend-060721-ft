import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" value={ state.username } onChange={ handleChange } />
        </div><br />
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" value={ state.password } onChange={ handleChange } />
        </div><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
