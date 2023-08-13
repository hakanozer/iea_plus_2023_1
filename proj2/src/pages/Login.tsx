import React, { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
 
  // fnc Login
  const fncLogin = (evt: FormEvent) => {
    evt.preventDefault()

    if ( email !== '' && password !== '' ) {
      if ( email === 'ali@mail.com' && password === '12345') {
        // Geçici -> tarayıcı açık olduğu sürece yaşayan data
        // 1. parametre -> key
        // 2. parametre -> val
        // sessionStorage.setItem('user', email)
        const item = {
          email: email,
          name: 'Ali Bilmem',
          phone: '5435556677'
        }
        const stItem = JSON.stringify(item) 
        localStorage.setItem('user', stItem)
        navigate('/dashboard')
      }else {
        setErrorMessage("Kullanıcı ad yada şifre hatalı!")
      }
    }else {
      setErrorMessage("Lütfen tüm alanları doldurunuz!")
    }
  }

  return (
    <>
        <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 col-xxl-4'></div>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4'>
                <form onSubmit={fncLogin}>
                  <h2>Admin Login</h2>

                  {  errorMessage !== '' && 
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Hata!</strong> {errorMessage}
                    <button type="button" className="btn-close" onClick={() => setErrorMessage('') }></button>
                  </div>
                  }

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