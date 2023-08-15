import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IUser } from '../models/IUser'
import { decrypt } from '../util'

function NavBar() {

    const navigate = useNavigate()

    const [item, setItem] = useState<IUser>()
    useEffect(()=> {
      var stData = localStorage.getItem("user")
      if ( stData !== null ) {
        try {
          stData = decrypt(stData)
          const obj = JSON.parse(stData) as IUser
          console.log("çalıştım")
          setItem(obj)
        } catch (error) {
          localStorage.removeItem("user")
          navigate('/')
        }
      }else {
        navigate('/')
      }
    }, [])


  const logOut = () => {
    const answer = window.confirm('Are you sure?')
    if ( answer === true ) {
      localStorage.removeItem('user')
      navigate('/')
    }
  }  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/profile' className="nav-link">Profile</NavLink>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a role='button' onClick={logOut} className="dropdown-item">Logout</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">{item?.name}</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  )
}

export default NavBar