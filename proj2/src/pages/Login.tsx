import React, { useState, FormEvent } from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  // fnc Login
  const fncLogin = (evt: FormEvent) => {
    evt.preventDefault()
    if ( email !== '' && password !== '' ) {
      console.log(email, password, "fncLogin Call")
    }else {
      window.alert("Lütfen tüm alanları doldurunuz!")
    }
    
  }

  return (
    <>
        <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 col-xxl-4'></div>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4'>
                <form onSubmit={fncLogin}>
                  <h2>Admin Login</h2>
                  <div className='mb-3'>
                    <input required onChange={(evt) =>  setEmail(evt.target.value)} placeholder='E-Mail' type='email' className='form-control' />
                  </div>
                  <div className='mb-3'>
                    <input required onChange={(evt) => setPassword(evt.target.value)} placeholder='Password' type='password' className='form-control' />
                  </div>
                  <button className='btn btn-success'>Send</button>
                </form>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 col-xxl-4'></div>
        </div>
    </>
  )
}

export default Login