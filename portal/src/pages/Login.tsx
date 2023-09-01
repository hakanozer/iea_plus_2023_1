import React, { FormEvent, useState } from 'react'
import Header from '../components/Header'
import login_img from '../assets/login_img.jpg'
import { login } from '../Api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('kminchelle')
  const [password, setPassword] = useState('0lelplR')
  const fncLoginForm = (evt:FormEvent) => {
    evt.preventDefault()
    login(email, password).then( res => {
        const dt = res.data
        if (dt) {
            const stData = JSON.stringify(dt)
            localStorage.setItem('customer', stData)
            window.location.href = '/'
        }
    }).catch(err => {
        toast.error(err.message)
    })
  }

  return (
    <>
        <Header />
        <div className='row'>
            <div className='col-sm-6'>
                <h2>Login</h2>
                <form onSubmit={fncLoginForm}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input value={email} required onChange={(evt) => setEmail(evt.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input value={password} required onChange={(evt) => setPassword(evt.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            <div className='col-sm-6' style={{textAlign: 'center'}}>
            <img style={{ maxHeight: 400, }} src={login_img} className="img-fluid" alt='' />
            </div>
        </div>
    </>
  )
}

export default Login